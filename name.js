var util = require("util")

module.exports = {
	run(name){
		util.setStatus(name)
		
		if (name.memory.status == "harvesting") {
			util.gatherFromStorage(name)
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
				
				if (!spot) {
					util.gatherFromStorage(name)
					return
				}
				
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