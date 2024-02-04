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
			util.load(room,"towers")
		}
		
		Memory[room.name].towers = []
		towers = room.find(FIND_MY_STRUCTURES, {filter: { structureType: STRUCTURE_TOWER }})
		util.save(room,"towers",towers)
		return towers
	},
	getExtensions(room) {
		var extensions
		if (Game.time % 10 != 0 && Memory[room.name].extensions) {
			return util.load(room,"extensions")
		}
		
		Memory[room.name].extensions = []
		extensions = room.find(FIND_MY_STRUCTURES, {filter: { structureType: STRUCTURE_EXTENSION }})
		util.save(room,"extensions",extensions)
		return extensions
	},
	getRoads(room) {
		var roads
		if (Game.time % 20 != 0 && Memory[room.name].roads) {
			return util.load(room,"roads")
		}
		
		Memory[room.name].roads = []
		roads = room.find(FIND_STRUCTURES, {filter: function(e){return e.structureType == STRUCTURE_ROAD && e.hits / e.hitsMax < .2}})
		util.save(room,"roads",roads)
		return roads
	},
	getDrops(room) {
		return drops = room.find(FIND_DROPPED_RESOURCES, {filter: function(e) {return e.resourceType == RESOURCE_ENERGY && e.amount > 250}})
	},
	getRuins(room) {
		var ruins
		if (Game.time % 10 != 0 && Memory[room.name].ruins) {
			return util.load(room,"ruins")
		}
		
		Memory[room.name].ruins = []
		ruins = room.find(FIND_RUINS, {filter: function(e){return e.store.getUsedCapacity(RESOURCE_ENERGY) > 200}})
		util.save(room,"ruins",ruins)
		return ruins
	}
}