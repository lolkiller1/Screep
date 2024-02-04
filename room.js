var util = require("util")
var roomTask = require("roomTask")
var roomUpgrader = require("roomUpgrader")
var tower = require("tower")
var waller = require("waller")

module.exports = {
	run(roomName){
		var room = Game.rooms[roomName]
		var roomLevel = room.controller.level
		var spawn = Game.spawns[roomName]
		
		roomTask.init(room)
		var towers = roomTask.getTowers(room)
		var extensions = roomTask.getExtensions(room)
		var needyExtensions = util.getExtensionsInNeed(extensions)
		var drops = roomTask.getDrops(room)
		var ruins = roomTask.getRuins(room)
		var roads = roomTask.getRoads(room)
		var sources = room.find(FIND_SOURCES)
				
		for (var t in towers) {
			tower.run(towers[t], roads)
		}
		
		var miner = Game.creeps[roomName + "_Miner"]
		if (miner) {
			if (miner.memory.source == null) {
				miner.memory.source = miner.pos.findClosestByRange(FIND_SOURCES).id
			}
			
			var energy = Game.getObjectById(miner.memory.source)
			if (miner.pos.getRangeTo(energy) > 1) {
				miner.moveTo(energy)
			} else {
				miner.harvest(energy)
			}
		} else {
			util.spawnCreep(roomName + "_Miner", room.energyCapacityAvailable >= 750 ? {w:5,m:5} : room.energyCapacityAvailable >= 500 ? {m:2,w:4} : {m:1,w:2},{status:"harvesting"},roomName)
		}
		
		var constructionSpots = room.find(FIND_MY_CONSTRUCTION_SITES)
		if (constructionSpots.length > 0) {
			var builder = Game.creeps[roomName + "_Builder"]
			if (builder) {
				roomUpgrader.build(builder, drops, ruins)
			} else {
				util.spawnCreep(roomName + "_Builder", room.energyCapacityAvailable >= 1300 ? {w:5,c:3,m:8} : room.energyCapacityAvailable >= 750 ? {w:3,c:2,m:5} : room.energyCapacityAvailable >= 500 ? {m:4,c:3,w:1} : {m:2,c:1,w:1},{status:"harvesting"},roomName)
			} 
		}
		
		var upgrader = Game.creeps[roomName + "_Upgrader"]
		if (upgrader) {
			roomUpgrader.run(upgrader, needyExtensions, drops, ruins)
		} else {
			util.spawnCreep(roomName + "_Upgrader", room.energyAvailable >= 1300 ? {w:5,c:5,m:10} : room.energyAvailable >= 750 ? {c:3,m:6,w:3} : room.energyAvailable >= 500 ? {m:4,c:2,w:2} : {m:2,c:1,w:1},{status:"harvesting"},roomName)
		}
			
		var upgrader2 = Game.creeps[roomName + "_Upgrader2"]
		if (upgrader2) {
			roomUpgrader.run2(upgrader2, needyExtensions, towers, drops, ruins)
		} else if (upgrader && upgrader.hits > 500 && miner && miner.hits > 500) {
			util.spawnCreep(roomName + "_Upgrader2", room.energyCapacityAvailable >= 1300 ? {w:5,c:5,m:10} : room.energyCapacityAvailable >= 750 ? {c:3,m:6,w:3} : room.energyCapacityAvailable >= 500 ? {m:4,c:2,w:2} : {m:2,c:1,w:1},{status:"harvesting"},roomName)
		}
		
		if (sources.length > 1) {
			var miner2 = Game.creeps[roomName + "_Miner2"]
			if (miner2) {
				if (miner2.memory.source == null) {
					var theId = miner2.pos.findClosestByRange(FIND_SOURCES).id 
					miner2.memory.source = miner2.pos.findClosestByRange(FIND_SOURCES, {filter:function(e){return e.id != theId}}).id
				}
			
				var energy = Game.getObjectById(miner2.memory.source)
				if (miner2.pos.getRangeTo(energy) > 1) {
					miner2.moveTo(energy)
				} else {
					miner2.harvest(energy)
				}
			} else {
				util.spawnCreep(roomName + "_Miner2", room.energyCapacityAvailable >= 750 ? {w:5,m:5} : room.energyCapacityAvailable >= 500 ? {m:2,w:4} : {m:1,w:2},{status:"harvesting"},roomName)
			}
		}
		
		if (roomLevel >= 4) {
			var w = Game.creeps[roomName + "_Waller"]
			if (w) {
				waller.run(w, drops, ruins)
			} else {
				util.spawnCreep(roomName + "_Waller", {w:2,c:1,m:3},{status:"harvesting"},roomName)
			}
		}
	}
}