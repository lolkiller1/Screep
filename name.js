var util = require("util")
var filler = require("filler")

module.exports = {
	run(name, extensions){
		util.setStatus(name)
		
		var spot = Game.spawns["E5N57"]
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
				extensions = _.filter(extensions, function(e) {return e.id != spot.id})
				name.moveTo(name.pos.findClosestByPath(extensions))
			}
		}		
	}
}