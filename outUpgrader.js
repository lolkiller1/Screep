var util = require("util")

module.exports = {
	run(tess){
		
		if (creep.room.name != "E6N59") {
			if (creep.room.name == "E5N57") creep.moveTo(new RoomPosition(0, 14, 'E5N57'))
			if (creep.room.name == "E4N57") creep.moveTo(new RoomPosition(43, 0, "E4N57"))
			if (creep.room.name == "E4N58") creep.moveTo(new RoomPosition(0, 6, "E4N58"))
			if (creep.room.name == "E3N58") creep.moveTo(new RoomPosition(27, 0, "E3N58"))
			if (creep.room.name == "E3N59") creep.moveTo(new RoomPosition(36, 0, "E3N59"))
			if (creep.room.name == "E3N60") creep.moveTo(new RoomPosition(49, 40, "E3N60"))
			if (creep.room.name == "E4N60") creep.moveTo(new RoomPosition(49, 38, "E4N60"))
			if (creep.room.name == "E5N60") creep.moveTo(new RoomPosition(49, 30, "E5N60"))
			if (creep.room.name == "E6N60") creep.moveTo(new RoomPosition(20, 49, "E6N60"))
			return
		}
		
		
		
		var storageStatus = util.getCreepStorageStatus(tess)
		
		if (storageStatus == "FULL" && tess.memory.status == "harvesting") {
			tess.memory.status = "working"
		} else if (storageStatus == "EMPTY" && tess.memory.status == "working") {
			tess.memory.status = "harvesting"
		}
		
		if (tess.memory.status == "harvesting") {
			util.gatherFromEnergy()
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