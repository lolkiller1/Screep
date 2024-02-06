var util = require("util")

module.exports = {
	run(creep){
		util.setStatus(creep)
		
		if (creep.memory.status == "harvesting") {
			var spot = creep.pos.findClosestByPath(FIND_DROPPED_RESOURCES, {filter: function(ob){return ob.resourceType == RESOURCE_ENERGY && ob.amount > 200}})
			
			if (!spot || creep.name == "name" || creep.name == "name2") {
				spot = Game.getObjectById("65bf22a6682254d4499b95d0")
				if (creep.pos.getRangeTo(spot) > 1) {
					creep.moveTo(spot)
				} else {
					creep.withdraw(spot, RESOURCE_ENERGY)
				}
			return
			}
			
			
			
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
			
			tower = Game.getObjectById("65b198c63d017d635f88c752")
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