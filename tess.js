var util = require("util")

module.exports = {
	run(tess){
		util.setStatus(tess)
		
		if (tess.memory.status == "harvesting") {
			if (tess.pos.getRangeTo(tess.room.storage) > 1) {
				tess.moveTo(tess.room.storage)
			} else {
				tess.withdraw(tess.room.storage, RESOURCE_ENERGY)
			}
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