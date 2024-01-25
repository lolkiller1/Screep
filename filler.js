var util = require("util")

module.exports = {
	run(creep){
		var storageStatus = util.getCreepStorageStatus(creep)
		
		if (storageStatus == "FULL") {
			creep.memory.status = "working"
		} else if (storageStatus == "EMPTY") {
			creep.memory.status = "harvesting"
		}
		
		if (creep.memory.status == "harvesting") {
			var spot = creep.pos.findClosestByPath(FIND_DROPPED_RESOURCES)
			if (creep.pos.getRangeTo(spot) > 1) {
				creep.moveTo(spot)
			} else {
				creep.pickup(spot)
			}
		}

		if (creep.memory.status == "working"){
			var storage = creep.room.storage
			if (creep.pos.getRangeTo(storage) > 1) {
				creep.moveTo(storage)
			} else {
				creep.transfer(storage, RESOURCE_ENERGY)
			}
		}
	}
}