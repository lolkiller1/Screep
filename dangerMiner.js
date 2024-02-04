var util = require("util")


module.exports = {
	run(creep){
		if (util.cower(creep)) return
		
		if (creep.room.name == "E5N57") {
			creep.moveTo(20,49)
			return
		}
		
		creep.heal(creep)
		var source = creep.pos.findClosestByPath(FIND_SOURCES)
		
		if (creep.pos.getRangeTo(source) > 1) {
			creep.moveTo(source)
		} else {
			creep.harvest(source)
		}
		
	},
	gather(creep){
		
		if (util.cower(creep)) return
		
		util.setStatus(creep)
		
		if (creep.memory.status == "harvesting") {
			if (creep.room.name == "E5N57") {
				creep.moveTo(20,49)
				return
			}
			
			var drop = util.findClosestDrop(creep)
			if (drop) {
				creep.moveTo(drop)
				creep.pickup(drop)
			}
			
		} else {
			if (creep.room.name == "E5N56") {
				creep.moveTo(22,0)
				return
			}
			
			if (creep.pos.getRangeTo(creep.room.storage) > 1) {
				creep.moveTo(creep.room.storage)
			} else {
				creep.transfer(creep.room.storage, RESOURCE_ENERGY)
			}
		}
	}
}