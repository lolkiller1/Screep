var util = require("util")
var roomUpgrader = require("roomUpgrader")
var tower = require("tower")

module.exports = {
	run(roomName){
		var room = Game.rooms[roomName]
		var roomLevel = room.controller.level
		var spawn = Game.spawns[roomName]
		
		var towers = room.find(FIND_MY_STRUCTURES, {filter: { structureType: STRUCTURE_TOWER }})
		for (var t in towers) {
			tower.run(towers[t])
		}
		
		var miner = Game.creeps[roomName + "_Miner"]
		if (miner) {
			var energy = miner.pos.findClosestByRange(FIND_SOURCES_ACTIVE)
			if (miner.pos.getRangeTo(energy) > 1) {
				miner.moveTo(energy)
			} else {
				miner.harvest(energy)
			}
		} else {
			util.spawnCreep(roomName + "_Miner", room.energyCapacityAvailable >= 750 ? {w:5,m:5} : room.energyCapacityAvailable >= 500 ? {m:2,w:4} : {m:1,w:2},{status:"harvesting"},roomName)
		}
		
		var constructionSpots = room.find(FIND_MY_CONSTRUCTION_SITES)
		if (constructionSpots[0]) {
			var builder = Game.creeps[roomName + "_Builder"]
			if (builder) {
				roomUpgrader.build(builder)
			} else {
				util.spawnCreep(roomName + "_Builder", room.energyCapacityAvailable >= 1300 ? {w:4,c:7,m:11} : room.energyCapacityAvailable >= 750 ? {w:2,c:4,m:6} : room.energyCapacityAvailable >= 500 ? {m:4,c:3,w:1} : {m:2,c:1,w:1},{status:"harvesting"},roomName)
			} 
		}
		
		var upgrader = Game.creeps[roomName + "_Upgrader"]
		if (upgrader) {
			roomUpgrader.run(upgrader)
		} else {
			util.spawnCreep(roomName + "_Upgrader", room.energyAvailable >= 1300 ? {w:5,c:5,m:10} : room.energyAvailable >= 750 ? {c:3,m:6,w:3} : room.energyAvailable >= 500 ? {m:4,c:2,w:2} : {m:2,c:1,w:1},{status:"harvesting"},roomName)
		}
			
		var upgrader2 = Game.creeps[roomName + "_Upgrader2"]
		if (upgrader2) {
			roomUpgrader.run2(upgrader2)
		} else if (upgrader && upgrader.hits > 500) {
			util.spawnCreep(roomName + "_Upgrader2", room.energyAvailable >= 1300 ? {w:5,c:5,m:10} : room.energyAvailable >= 750 ? {c:3,m:6,w:3} : room.energyAvailable >= 500 ? {m:4,c:2,w:2} : {m:2,c:1,w:1},{status:"harvesting"},roomName)
		}
	}
}