var util = require("util")

module.exports = {
	run(tess, link){
		util.setStatus(tess)
		
		if (tess.memory.status == "harvesting") {
			if (tess.pos.getRangeTo(link) > 1) {
				tess.moveTo(link)
			} else {
				tess.withdraw(spot, RESOURCE_ENERGY)
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