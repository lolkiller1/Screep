var util = require("util")


module.exports = {
	run(creep){
		if (creep.room.name == "E5N57") {
			creep.moveTo(20,49)
			return
		}
		
		var source = creep.pos.findClosestByPath(FIND_SOURCES)
		var enemy = creep.pos.findClosestByPath(FIND_HOSTILE_CREEPS)
		
		if (creep.pos.getRangeTo(enemy) < 5) {
			var direction = creep.pos.getDirectionTo(enemy)
			creep.move(util.getOppositeDirection(direction))
			return
		}
		
		if (creep.getRangeTo(source) > 1) {
			creep.moveTo(source)
		} else {
			creep.harvest(source)
		}
		
	}
}