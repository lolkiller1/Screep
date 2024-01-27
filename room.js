var util = require("util")
var roomUpgrader = require("roomUpgrader")

module.exports = {
	run(roomName){
		var room = Game.rooms[roomName]
		var roomLevel = room.controller.level
		var spawn = Game.spawns[roomName]
		
		if (roomLevel < 3) {
			var upgrader = Game.creeps[roomName + "_Upgrader"]
			if (upgrader) {
				roomUpgrader.run(upgrader)
			} else {
				util.spawnCreep(roomName + "_Upgrader",{m:2,c:1,w:1},{status:"harvesting"},roomName)
			}
			
			var upgrader2 = Game.creeps[roomName + "_Upgrader2"]
			if (upgrader2) {
				roomUpgrader.run(upgrader2)
			} else {
				util.spawnCreep(roomName + "_Upgrader2",{m:2,c:1,w:1},{status:"harvesting"},roomName)
			}
			
		}
	}
}