var util = require("util")

module.exports = {
	run(tess){
		var storageStatus = util.getCreepStorageStatus(tess)
		
		if (storageStatus == "FULL" && tess.memory.status == "harvesting") {
			tess.memory.status = "working"
		} else if (storageStatus == "EMPTY" && tess.memory.status == "working") {
			tess.memory.status = "harvesting"
		}
		
		console.log(storageStatus)
		
		if (tess.memory.status == "harvesting") {
			util.gatherFromEnergy(tess)
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