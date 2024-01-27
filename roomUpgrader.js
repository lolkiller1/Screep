var util = require("util")

module.exports = {
	run(creep){
		var storageStatus = util.getCreepStorageStatus(creep)
		
		if (storageStatus == "FULL" && creep.memory.status == "harvesting") {
			creep.memory.status = "working"
		} else if (storageStatus == "EMPTY" && creep.memory.status == "working") {
			creep.memory.status = "harvesting"
		}
		
		if (creep.memory.status == "harvesting") {
			util.gatherFromEnergy(creep)
		} else {
			var spawn = Game.spawns[creep.room.name]
			var extensions = creep.room.find(FIND_MY_STRUCTURES, {filter: { structureType: STRUCTURE_EXTENSION }})
			extensions = _.filter(extensions, function(extension) {return extension.store.getFreeCapacity(RESOURCE_ENERGY) > 0})
			spot = creep.pos.findClosestByPath(extensions)
			if (spawn.store.getFreeCapacity(RESOURCE_ENERGY) > 0) {
				if (creep.pos.getRangeTo(spawn) > 1) {
					creep.moveTo(spawn)
				} else {
					creep.transfer(spawn,RESOURCE_ENERGY)
				}
			} else if (spot) {
				if (creep.pos.getRangeTo(spot) > 1) {
					creep.moveTo(spot)
				} else {
					creep.transfer(spot, RESOURCE_ENERGY)
				}
			} else {
				if (creep.pos.getRangeTo(creep.room.controller) > 3) {
					creep.moveTo(creep.room.controller)
				} else {
					creep.upgradeController(creep.room.controller)
				}
			}
		}
	}
}