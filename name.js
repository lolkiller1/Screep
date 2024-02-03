var util = require("util")
var _ = require("lodash")

module.exports = {
	run(name){
		util.setStatus(name)
		
		var spot = Game.spawns["E5N57"]
		var extensions = name.room.find(FIND_MY_STRUCTURES, {filter: { structureType: STRUCTURE_EXTENSION }})
		extensions = _.filter(extensions, function(extension) {return extension.store.getFreeCapacity(RESOURCE_ENERGY) > 0})
		spot = spot ? spot : name.pos.findClosestByPath(extensions)
		
		
		if (name.memory.status == "harvesting" || !spot) {
			util.gatherFromStorage(name)
		} else {
			if (spot.store.getFreeCapacity(RESOURCE_ENERGY) > 0) {
				if (name.pos.getRangeTo(spot) > 1) {
					name.moveTo(spot)
				} else {
					name.transfer(spot, RESOURCE_ENERGY)
				}
			} else {				
				if (name.pos.getRangeTo(spot) > 1) {
					name.moveTo(spot)
				} else {
					name.transfer(spot, RESOURCE_ENERGY)
					extensions = _.filter(extensions, function(e) {return e.id != spot.id})
					name.moveTo(name.pos.findClosestByPath(extensions))
				}
			}			
			
		}
		
	}
	
}