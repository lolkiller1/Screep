var util = require("util")
var _ = require("lodash")

module.exports = {
	run(creep){
		var storageStatus = util.getCreepStorageStatus(creep)
		
		if (storageStatus == "FULL") {
			creep.memory.status = "working"
		} else if (storageStatus == "EMPTY") {
			creep.memory.status = "harvesting"
		}
		
		if (creep.memory.status == "harvesting") {
			var spot = creep.pos.findClosestByPath(FIND_DROPPED_RESOURCES, {filter: function(ob){return ob.resourceType == RESOURCE_ENERGY && ob.amount > 200}})
			
			if (!spot) return
			
			if (creep.pos.getRangeTo(spot) > 1) {
				creep.moveTo(spot)
			} else {
				creep.pickup(spot)
			}
		}

		if (creep.memory.status == "working"){
			var tower = Game.getObjectById("65ae09ade53e4a11e1675b1e")
			if (tower.store.getFreeCapacity(RESOURCE_ENERGY) > 0) {
				creep.moveTo(tower)
				creep.transfer(tower, RESOURCE_ENERGY)
				return
			}
			
			
			var storage = creep.room.storage
			if (creep.pos.getRangeTo(storage) > 1) {
				creep.moveTo(storage)
			} else {
				creep.transfer(storage, RESOURCE_ENERGY)
			}
		}
	}
}