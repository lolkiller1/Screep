var util = require("util")

module.exports = {
	var run(tess){
		var storageStatus = util.getCreepStorageStatus(tess)
		
		if (storageStatus == "FULL" && tess.memory.status == "harvesting") {
			tess.memory.status = "working"
		} else if (storageStatus == "EMPTY" && tess.memory.status == "working") {
			tess.memory.status = "harvesting"
		}
		
		if (tess.memory.status == "harvesting") {
			util.gatherFromEnergy(tess)
		} else {
			var spot = creep.room.controller 
			if (creep.pos.getRangeTo(spot) > 1) {
				creep.moveTo(spot)
			} else {
				creep.upgradeController(spot)
			}
		}
		
	}
	
}

var status = creep.