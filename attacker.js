var util = require("util")


module.exports = {
	run(creep){
		var type = creep.memory.type
		
		if (creep.room.name == "E5N57") {
			creep.moveTo(20,49)
			return
		}
	
		var enemy = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS)
		creep.moveTo(enemy)
		
		creep.heal(creep)
		
		if (type == "ranged"){
			if (creep.pos.getRangeTo(enemy) > 3) {
				creep.moveTo(enemy)
			} else if (creep.hits / creep.hitsMax < .8) {
				var direction = creep.pos.getDirectionTo(enemy)
				creep.move(util.getOppositeDirection(direction))
			}			
			creep.rangedAttack(enemy)
			
		} else if (creep.type == "melee") {
			creep.moveTo(enemy)
			creep.attack(enemy)
		}		
	}
}