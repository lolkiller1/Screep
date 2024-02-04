var util = require("util")
var filler = require("filler")

module.exports = {
	run(name){
		util.setStatus(name)
		
		var spot = Game.spawns["E5N57"]
		var extensions = name.room.find(FIND_MY_STRUCTURES, {filter: { structureType: STRUCTURE_EXTENSION }})
		extensions = _.filter(extensions, function(extension) {return extension.store.getFreeCapacity(RESOURCE_ENERGY) > 0})
		spot = spot.store.getFreeCapacity(RESOURCE_ENERGY) > 0 ? spot : name.pos.findClosestByPath(extensions)
		
		if (!spot) {
			filler.run(name)
			return
		}
		
		if (name.memory.status == "harvesting") {
			util.gatherFromStorage(name)
		} else {
			if (name.pos.getRangeTo(spot) > 1) {
				name.moveTo(spot)
			} else {
				name.transfer(spot, RESOURCE_ENERGY)
			}
		}		
	}
}