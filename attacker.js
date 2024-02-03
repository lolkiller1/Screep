var util = require("util")


module.exports = {
	run(creep){
		var flag = creep.memory.flag
		var type = creep.memory.type
		
		if (flag.room != creep.room) {
			creep.moveTo(flag)
			return
		}
		
		var enemy = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS)
		creep.moveTo(enemy)
		
		if (creep.type == "ranged"){
			if (creep.pos.getRangeTo(enemy) > 3) {
				creep.moveTo(enemy)
			} else {
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