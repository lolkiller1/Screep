var util = require("util")


module.exports = {
	run(creep){
		util.setStatus(creep)
		
		if (creep.memory.status == "harvesting") {
			if (creep.room.name == "E5N57") {
				creep.moveTo(20,49)
				return
			}
		} else {
			if (creep.room.name == "E5N57") {
				creep.moveTo(20,49)
				return
			}
		}
		
		if (creep.room.name == "E5N57") {
			creep.moveTo(20,49)
			return
		}
	}
}