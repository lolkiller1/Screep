var util = require("util")

module.exports = {
	run(creep){
		util.setStatus(creep)
		
		var spot = util.findClosestBuildable(creep)
		
		if (creep.memory.status == "harvesting" || !spot) {
			util.gatherFromStorage(creep)
		} else {
			if (creep.pos.getRangeTo(spot) > 1) {
				creep.moveTo(spot)
			} else {
				creep.build(spot)
			}
		}
		
	}
	
}