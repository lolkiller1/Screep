var _ = require('lodash')

module.exports = {
	getBodyArray(body){
		var array = []
		
		var addParts = function(arr, part, times){
			for (var i = 0; i < times; i++) {
				arr.push(part)
			}
		}
		
		addParts(array, MOVE, body.m)
		addParts(array, WORK, body.w)
		addParts(array, CARRY, body.c)
		addParts(array, ATTACK, body.a)
		addParts(array, RANGED_ATTACK, body.r)
		addParts(array, HEAL, body.h)
		addParts(array, CLAIM, body.claim)
		addParts(array, TOUGH, body.t)
		
		return array
	},
	// util.spawnCreep("name", {m:2,w:1,c:1}, {}, 'E5N57');
	spawnCreep(name, body, mem, spawn) {
		var body = this.getBodyArray(body)
		//console.log(spawn + " " + body + " " + name + " " + mem)
		//console.log(Game.spawns[spawn].spawnCreep(body, name, {memory:mem}))
		Game.spawns[spawn].spawnCreep(body, name, {memory:mem})
	},
	getCreepStorageStatus(creep) {
		if (creep.store.getFreeCapacity() == 0) {
			return "FULL"
		} else if (creep.store.getFreeCapacity() == creep.store.getCapacity()){
			return "EMPTY"
		} else {
			return "MID"
		}
	},
	gatherFromEnergy(creep, spot) {
		var energy
		if (spot) {
			energy = Game.getObjectById(spot)
		} else {
			energy = creep.pos.findClosestByPath(FIND_SOURCES_ACTIVE)
		}
		
		if (creep.pos.getRangeTo(energy) > 1) {
			creep.moveTo(energy)
		} else {
			creep.harvest(energy)
		}
	},
	gatherFromSpot(creep, x, y) {
		if (creep.pos.getRangeTo(x,y) > 0) {
			creep.moveTo(x,y)
		} else {
			var spot = creep.pos.findClosestByRange(FIND_DROPPED_RESOURCES)
			if (spot) {
				creep.pickup(spot)
			}
		}
	},
	gatherFromStorage(creep){
		var storage = creep.room.storage
		if (creep.pos.getRangeTo(storage) > 1) {
			creep.moveTo(storage)
		} else {
			creep.withdraw(storage, RESOURCE_ENERGY)
		}
	},
	findClosestBuildable(creep) {
	    return creep.pos.findClosestByPath(FIND_MY_CONSTRUCTION_SITES)
	},
	findClosestRuin(creep) {
		return creep.pos.findClosestByPath(FIND_RUINS, 
			{filter: function(ob){return ob.store.getUsedCapacity(RESOURCE_ENERGY) > 200}})
	},
	findClosestDrop(creep) {
		return creep.pos.findClosestByPath(FIND_DROPPED_RESOURCES, 
			{filter: function(ob){return ob.resourceType == RESOURCE_ENERGY && ob.amount > 200}})
	},
	findClosestExtensionInNeed(creep){
		var extensions = creep.room.find(FIND_MY_STRUCTURES, {filter: { structureType: STRUCTURE_EXTENSION }})
		extensions = _.filter(extensions, function(extension) {return extension.store.getFreeCapacity(RESOURCE_ENERGY) > 0})
		return creep.pos.findClosestByPath(extensions)
	},
	getOppositeDirection(direction) {
		switch(direction) {
			case TOP: return BOTTOM
			case TOP_RIGHT: return BOTTOM_LEFT
			case RIGHT: return LEFT
			case BOTTOM_RIGHT: return TOP_LEFT
			case BOTTOM: return TOP 
			case BOTTOM_LEFT: return TOP_RIGHT 
			case LEFT: return RIGHT
			default: return BOTTOM_RIGHT
		}
	},
	setStatus(creep) {
		var storageStatus = this.getCreepStorageStatus(creep)
		if (storageStatus == "FULL" && creep.memory.status == "harvesting") {
			creep.memory.status = "working"
		} else if (storageStatus == "EMPTY" && creep.memory.status == "working") {
			creep.memory.status = "harvesting"
		}
	}
}