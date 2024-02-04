var util = require("util")

module.exports = {
	run(creep){
		
		if (creep.room.name == "E7N57") {
			creep.moveTo(49,28)
			return
		}
		
		util.setStatus(creep)
		
		if (creep.memory.status == "harvesting") {
			util.gatherFromEnergy(creep)
		} else {
			var spot = creep.room.controller 
			if (creep.pos.getRangeTo(spot) > 3) {
				creep.moveTo(spot)
			} else {
				creep.upgradeController(spot)
			}
		}
		
	},
	build(creep){
		
		if (creep.room.name == "E7N57") {
			creep.moveTo(49,28)
			return
		}
		
		util.setStatus(creep)
		
		if (creep.memory.status == "harvesting") {
			util.gatherFromEnergy(creep)
		} else {
			var spot = creep.pos.findClosestByPath(FIND_MY_CONSTRUCTION_SITES)
			if (creep.pos.getRangeTo(spot) > 3) {
				creep.moveTo(spot)
			} else {
				creep.build(spot)
			}
		}
		
	}
	
}