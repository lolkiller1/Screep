var util = require("util")

module.exports = {
	init(room) {
		if (!Memory[room.name]) {
			Memory[room.name] = {}
		}
	},
	getTowers(room) {
		var towers
		if (Game.time % 10 != 0 && Memory[room.name].towers != null) {
			towers = []
			for (var t in Memory[room.name].towers) {
				towers.push(Game.getObjectById(Memory[room.name].towers[t]))
			}
			return towers
		}
		
		delete Memory[room.name].towers
		Memory[room.name].towers = []
		
		towers = room.find(FIND_MY_STRUCTURES, {filter: { structureType: STRUCTURE_TOWER }})
		for (var tower in towers) {
			Memory[room.name].towers.push(towers[tower].id)
		}
		return towers
	},
	getExtensions(room) {
		var extensions
		if (Game.time % 10 != 0 && Memory[room.name].extensions) {
			console.log("here")
			return util.loadFromMemory(room,"extensions")
		}
		
		
		delete Memory[room.name].extensions
		Memory[room.name].extensions = []
		
		extensions = room.find(FIND_MY_STRUCTURES, {filter: { structureType: STRUCTURE_EXTENSION }})
		for (var extension in extensions) {
			Memory[room.name].extensions.push(extensions[extension].id)
		}
		return extensions
	},
	getDrops(room) {
		return room.find(FIND_DROPPED_RESOURCES, {filter: {resourceType:RESOURCE_ENERGY}})
	}
}