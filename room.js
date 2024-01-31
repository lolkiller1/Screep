var util = require("util")
var roomUpgrader = require("roomUpgrader")

module.exports = {
	run(roomName){
		var room = Game.rooms[roomName]
		var roomLevel = room.controller.level
		var spawn = Game.spawns[roomName]
		
		if (roomLevel < 5) {
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
					util.spawnCreep(roomName + "_Builder",room.energyCapacityAvalable >= 750 ? {w:2,c:4,m:6} : room.energyCapacityAvalable >= 500 ? {m:4,c:3,w:1} : {m:2,c:1,w:1},{status:"harvesting"},roomName)
				}
			}
			
			var upgrader = Game.creeps[roomName + "_Upgrader"]
			if (upgrader) {
				roomUpgrader.run(upgrader)
			} else {
				util.spawnCreep(roomName + "_Upgrader", room.energyAvailable >= 750 ? {c:3,m:6,w:3} : room.energyAvailable >= 500 ? {m:4,c:2,w:2} : {m:2,c:1,w:1},{status:"harvesting"},roomName)
			}
		}
	}
}