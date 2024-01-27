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
				roomUpgrader.run(creep)
			} else {
				util.spawnCreep(roomName + "_Upgrader",{m:2,c:1,w:1},{status:harvesting},roomName)
			}
		}
	}
}