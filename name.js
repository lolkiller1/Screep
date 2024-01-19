 var util = require("util")

module.exports = {
	run(name){
		var storageStatus = util.getCreepStorageStatus(name)
		
		if (storageStatus == "FULL" && name.memory.status == "harvesting") {
			name.memory.status = "working"
		} else if (storageStatus == "EMPTY" && name.memory.status == "working") {
			name.memory.status = "harvesting"
		}
		
		console.log(storageStatus)
		
		if (name.memory.status == "harvesting") {
			util.gatherFromEnergy(name)
		} else {
			var spot = Game.spawns["E5N57"]
			if (creep.pos.getRangeTo(spot) > 1) {
				creep.moveTo(spot)
			} else {
				creep.transfer(spot, RESOURCE_ENERGY)
			}
		}
		
	}
	
}