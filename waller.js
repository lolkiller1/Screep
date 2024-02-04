var util = require("util")

module.exports = {
	run(creep){
		var ramparts = this.getRamparts(creep)
		
		var storageStatus = util.getCreepStorageStatus(creep)
		if (storageStatus == "FULL" && creep.memory.status == "harvesting") {
			this.setNextRampart(creep)
			creep.memory.status = "working"
		} else if ((storageStatus == "EMPTY" && creep.memory.status == "working") || creep.memory.status == null) {
			creep.memory.status = "harvesting"
		}
		
		
		var spot = Game.getObjectById(creep.memory.ramps[creep.memory.curRamp])
		
		if (creep.memory.status == "harvesting" || !spot) {
			if (creep.room.storage) {
				util.gatherFromStorage(creep)
			} else {
				util.gather(creep,[false],[false])
			}
		} else {
			if (creep.pos.getRangeTo(spot) > 3) {
				creep.moveTo(spot)
			} else {
				creep.repair(spot)
			}
		}
		
	},
	getRamparts(creep) {
		var ramps = []
		if (Game.time % 10 != 0 && creep.memory.ramps != null) {
			for (var i in creep.memory.ramps) {
				ramps.push(Game.getObjectById(creep.memory.ramps[i]))
			}
			return ramps
		}
		
		creep.memory.ramps = []
		ramps = creep.room.find(FIND_STRUCTURES, {filter: { structureType: STRUCTURE_RAMPART }})
		for (var i in ramps) {
			creep.memory.ramps.push(ramps[i].id)
		}
		return ramps
	},
	setNextRampart(creep, ramps) {
		if (!creep.memory.curRamp) {
			creep.memory.curRamp = 0
			return
		}
		
		var cur = creep.memory.curRamp
		cur += 1
		if (cur > ramps.length - 1) {
			cur = 0
		}
		creep.memory.curRamp = cur
	}
	
}