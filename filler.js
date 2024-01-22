var util = require("util")

module.exports = {
	run(creep){
		var storageStatus = util.getCreepStorageStatus(creep)
		
		if (storageStatus == "FULL" && creep.memory.status == "harvesting") {
			creep.memory.status = "working"
		} else if (storageStatus == "EMPTY" && creep.memory.status == "working") {
			creep.memory.status = "harvesting"
		}
		
		if (creep.memory.status == "harvesting") {
			util.gatherFromEnergy(creep)
		} else {
			var spot = "tower"
			if (creep.pos.getRangeTo(spot) > 1) {
				creep.moveTo(spot)
			} else {
				creep.transfer(spot, RESOURCE_ENERGY)
			}
		}
		
	}
	
}