var util = require("util")

module.exports = {
	run(tess){
		util.setStatus(tess)
		
		if (tess.memory.status == "harvesting") {
			util.gatherFromStorage(tess)
		} else {
			var spot = tess.room.controller 
			if (tess.pos.getRangeTo(spot) > 3) {
				tess.moveTo(spot)
			} else {
				tess.upgradeController(spot)
			}
		}
		
	}
	
}