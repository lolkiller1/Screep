var util = require("util")
var _ = require("lodash")

module.exports = {
	run(name){
		var storageStatus = util.getCreepStorageStatus(name)
		
		if (storageStatus == "FULL" && name.memory.status == "harvesting") {
			name.memory.status = "working"
		} else if (storageStatus == "EMPTY" && name.memory.status == "working") {
			name.memory.status = "harvesting"
		}
		
		if (name.memory.status == "harvesting") {
			util.gatherFromSpot(name, 31, 7)
		} else {
			var spot = Game.spawns["E5N57"]
			if (spot.store.getFreeCapacity(RESOURCE_ENERGY) > 0) {
				if (name.pos.getRangeTo(spot) > 1) {
					name.moveTo(spot)
				} else {
					name.transfer(spot, RESOURCE_ENERGY)
				}
			} else {
				var extensions = name.room.find(FIND_MY_STRUCTURES, {filter: { structureType: STRUCTURE_EXTENSION }})
				extensions = _.filter(extensions, function(extension) {return extension.store.getFreeCapacity(RESOURCE_ENERGY) > 0})
				spot = name.pos.findClosestByPath(extensions)
				if (name.pos.getRangeTo(spot) > 1) {
					name.moveTo(spot)
				} else {
					name.transfer(spot, RESOURCE_ENERGY)
				}
			}			
			
		}
		
	}
	
}