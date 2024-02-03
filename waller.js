var util = require("util")

module.exports = {
	run(creep){
		util.setStatus(creep)
		
		var ramparts = creep.room.find(FIND_MY_STRUCTURES, {filter:{structureType:STRUCTURE_RAMPART}})
		
		
		var spot = creep.pos.findClosestByPath(ramparts)
		
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