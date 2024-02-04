var util = require("util")

module.exports = {
	run(creep){
		
		if (creep.room.name == "E7N58") {
			creep.moveTo(49,5)
			return
		}
		
		if (creep.room.name == "E8N58") {
			creep.moveTo(9,0)
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
		
		if (creep.room.name == "E7N58") {
			creep.moveTo(49,5)
			return
		}
		
		if (creep.room.name == "E8N58") {
			creep.moveTo(9,0)
			return
		}
		
		util.setStatus(creep)
		
		if (creep.memory.status == "harvesting") {
			util.gatherFromEnergy(creep)
		} else {
			var spot = creep.pos.findClosestByPath(FIND_MY_CONSTRUCTION_SITES)
			
			if (!spot) {
				spot = creep.room.controller 
				if (creep.pos.getRangeTo(spot) > 3) {
					creep.moveTo(spot)
				} else {
					creep.upgradeController(spot)
				}
				return
			}
			
			
			if (creep.pos.getRangeTo(spot) > 3) {
				creep.moveTo(spot)
			} else {
				creep.build(spot)
			}
		}
		
	}
	
}