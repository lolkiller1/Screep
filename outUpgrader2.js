var util = require("util")

module.exports = {
	run(creep){
		
		if (creep.room.name != "E7N57") {
			creep.moveTo(new RoomPosition(19,18,"E7N57"))
		}
		
			
		
		util.setStatus(creep)
		
		if (creep.memory.status == "harvesting") {
			var ruin = util.findClosestRuin(creep)
			if (ruin) {
				creep.moveTo(ruin)
				creep.withdraw(ruin, RESOURCE_ENERGY)
				return
			}
			var drop = util.findClosestDrop(creep)
			if (drop) {
				creep.moveTo(drop)
				creep.pickup(drop)
				return
			}
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
		
		
		
		util.setStatus(creep)
		
		if (creep.memory.status == "harvesting") {
			var ruin = util.findClosestRuin(creep)
			if (ruin) {
				if (creep.pos.getRangeTo(ruin) > 1) {
					
				creep.moveTo(ruin)
				} else {
				creep.withdraw(ruin, RESOURCE_ENERGY)
				}
				return
			}
			var drop = util.findClosestDrop(creep)
			if (drop) {
				if (creep.pos.getRangeTo(drop) > 1) {
					
				creep.moveTo(drop)
				} else {
				creep.pickup(drop)
				}
				return
			}
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