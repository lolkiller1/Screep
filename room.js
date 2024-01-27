var util = require("util")
var roomUpgrader = require("roomUpgrader")

module.exports = {
	run(roomName){
		var room = Game.rooms[roomName]
		var roomLevel = room.controller.level
		var spawn = Game.spawns[roomName]
		
		if (roomLevel < 3) {
			var miner = Game.creeps[roomName + "_Miner"]
			if (miner) {
				var energy = miner.pos.findClosestByRange(FIND_SOURCES_ACTIVE)
				if (miner.pos.getRangeTo(energy) > 1) {
					miner.moveTo(energy)
				} else {
					miner.harvest(energy)
				}
			} else {
				util.spawnCreep(roomName + "_Miner",room.energyAvailable >= 500 ? {m:2,w:4} : {m:1,w:2},{status:"harvesting"},roomName)
			}
			
			var upgrader = Game.creeps[roomName + "_Upgrader"]
			if (upgrader) {
				roomUpgrader.run(upgrader)
			} else {
				util.spawnCreep(roomName + "_Upgrader",room.energyAvailable >= 500 ? {m:4,c:2,w:2} : {m:2,c:1,w:1},{status:"harvesting"},roomName)
			}
			
			var upgrader2 = Game.creeps[roomName + "_Upgrader2"]
			if (upgrader2) {
				roomUpgrader.run(upgrader2)
			} else {
				//util.spawnCreep(roomName + "_Upgrader2",room.energyAvailable >= 500 ? {m:4,c:2,w:2} : {m:2,c:1,w:1},{status:"harvesting"},roomName)
			}
			
		}
	}
}