var util = require("util")

module.exports = {
	run(creep){
		util.setStatus(creep)
		
		if (creep.memory.status == "harvesting") {
			util.gatherFromStorage(creep)
		} else {
			var spot = util.findClosestBuildable(creep)
			if (creep.pos.getRangeTo(spot) > 1) {
				creep.moveTo(spot)
			} else {
				creep.build(spot)
			}
		}
		
	}
	
}