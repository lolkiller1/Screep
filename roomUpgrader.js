var util = require("util")

module.exports = {
	run(creep, extensions){
		var storageStatus = util.getCreepStorageStatus(creep)
		util.setStatus(creep)
		
		if (creep.memory.status == "harvesting") {
			var drop = util.findClosestDrop(creep)
			if (drop) {
				if (creep.pos.getRangeTo(drop) > 1){
					creep.moveTo(drop)
				} else {
					creep.pickup(drop)
				}
			} else {
				util.gatherFromEnergy(creep)
			}
		} else {
			var spawn = Game.spawns[creep.room.name]
			var spot = false
			if (extensions[0]) {
				spot = creep.pos.findClosestByPath(extensions)
			}
			if (spawn.store.getFreeCapacity(RESOURCE_ENERGY) > 0) {
				if (creep.pos.getRangeTo(spawn) > 1) {
					creep.moveTo(spawn)
				} else {
					creep.transfer(spawn,RESOURCE_ENERGY)
				}
			} else if (spot) {
				if (creep.pos.getRangeTo(spot) > 1) {
					creep.moveTo(spot)
				} else {
					creep.transfer(spot, RESOURCE_ENERGY)
					extensions = _.filter(extensions, function(e) {return e.id != spot.id})
					creep.moveTo(creep.pos.findClosestByPath(extensions))
				}
			} else {
				if (creep.pos.getRangeTo(creep.room.controller) > 3) {
					creep.moveTo(creep.room.controller)
				} else {
					creep.upgradeController(creep.room.controller)
				}
			}
		}
	},
	run2(creep, extensions, towers){
		var storageStatus = util.getCreepStorageStatus(creep)
		util.setStatus(creep)
		
		if (creep.memory.status == "harvesting") {
			var drop = util.findClosestDrop(creep)
			if (drop) {
				if (creep.pos.getRangeTo(drop) > 1){
					creep.moveTo(drop)
				} else {
					creep.pickup(drop)
				}
			} else {
				util.gatherFromEnergy(creep)
			}
		} else {
			towers = _.filter(towers, {filter: function(object) {return object.store.getFreeCapacity(RESOURCE_ENERGY) > 0}})
			var tower = towers[0] ? towers[0] : false
			
			var spot = false
			if (extensions[0]) {
				spot = creep.pos.findClosestByPath(extensions)
			}
			
			if (tower) {
				if (creep.pos.getRangeTo(tower) > 1) {
					creep.moveTo(tower)
				} else {
					creep.transfer(tower, RESOURCE_ENERGY)
				}
			} else if (spot) {
				if (creep.pos.getRangeTo(spot) > 1) {
					creep.moveTo(spot)
				} else {
					creep.transfer(spot, RESOURCE_ENERGY)
					extensions = _.filter(extensions, function(e) {return e.id != spot.id})
					creep.moveTo(creep.pos.findClosestByPath(extensions))
				}
			} else {
				if (creep.pos.getRangeTo(creep.room.controller) > 3) {
					creep.moveTo(creep.room.controller)
				} else {
					creep.upgradeController(creep.room.controller)
				}
			}
		}
	},
	build(creep){
		var storageStatus = util.getCreepStorageStatus(creep)
		util.setStatus(creep)
		
		if (creep.memory.status == "harvesting") {
			var drop = util.findClosestDrop(creep)
			if (drop){
				if (creep.pos.getRangeTo(drop) > 1){
					creep.moveTo(drop)
				} else {
					creep.pickup(drop)
				}
			} else {
				util.gatherFromEnergy(creep)
			}
		} else {
			var spot = util.findClosestBuildable(creep)
			if (creep.pos.getRangeTo(spot) > 3) {
				creep.moveTo(spot)
			} else {
				creep.build(spot)
			}
		}
	}
}