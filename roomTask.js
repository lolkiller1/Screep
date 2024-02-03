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
			util.loadFromMemory(room,"towers")
		}
		
		Memory[room.name].towers = []
		towers = room.find(FIND_MY_STRUCTURES, {filter: { structureType: STRUCTURE_TOWER }})
		util.save(room,"towers",towers)
		return towers
	},
	getExtensions(room) {
		var extensions
		if (Game.time % 10 != 0 && Memory[room.name].extensions) {
			return util.loadFromMemory(room,"extensions")
		}
		
		Memory[room.name].extensions = []
		extensions = room.find(FIND_MY_STRUCTURES, {filter: { structureType: STRUCTURE_EXTENSION }})
		util.save(room,"extensions",extensions)
		return extensions
	},
	getDrops(room) {
		return room.find(FIND_DROPPED_RESOURCES, {filter: {resourceType:RESOURCE_ENERGY}})
	}
}