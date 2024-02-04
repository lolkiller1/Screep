var util = require("util")


module.exports = {
	run(creep){
		var type = creep.memory.type
		
		if (creep.room.name == "E5N57") {
			creep.moveTo(20,49)
			return
		}
	
		var enemy = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS, {filter: function(e){return e.pos.y < 7}})
		var friendly = creep.pos.findClosestByRange(FIND_MY_CREEPS, {filter: function(e){return e.hits < e.hitsMax}})
		
		if (friendly) {
			creep.heal(friendly)
		} else if (creep.hits<creep.hitsMax) {
			creep.heal(creep)
		}
			
		if (type == "ranged"){
			if (creep.pos.getRangeTo(enemy) < 3) { 
				var direction = creep.pos.getDirectionTo(enemy)
				creep.move(util.getOppositeDirection(direction))
			} else if (creep.pos.getRangeTo(enemy) > 3 && creep.hits / creep.hitsMax > .9) {
				creep.moveTo(enemy)
			} else if (creep.hits / creep.hitsMax < .6) {
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