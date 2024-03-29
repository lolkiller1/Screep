module.exports = {
	run(creep){
		
		var hp = creep.hits / creep.hitsMax
		
		
		if (hp > .75) {
			if (creep.room.name != "E4N57") {
				creep.moveTo(0,12, {reusePath: 20})
				return
			}
			if (creep.pos.getRangeTo(creep.room.controller) > 1) {
				creep.moveTo(creep.room.controller, {reusePath: 20})
			} else {
				creep.reserveController(creep.room.controller)
			}
			
		} else if (hp > .5) {
			if (creep.room.name != "E3N57") {
				creep.moveTo(0,17, {reusePath: 20})
				return
			}
			if (creep.pos.getRangeTo(creep.room.controller) > 1) {
				creep.moveTo(creep.room.controller, {reusePath: 20})
			} else {
				creep.reserveController(creep.room.controller)
			}
		} else if (hp > .25) {
			if (creep.room.name == "E3N57") {
				creep.moveTo(49,19, {reusePath: 20})
				return
			}
			if (creep.room.name == "E4N57") {
				creep.moveTo(1,0)
				return
			}
			if (creep.pos.getRangeTo(creep.room.controller) > 1) {
				creep.moveTo(creep.room.controller, {reusePath: 20})
			} else {
				creep.reserveController(creep.room.controller)
			}
		} else {
			if (creep.room.name == "E4N58") {
				creep.moveTo(0,6, {reusePath: 20})
				return
			}
			if (creep.pos.getRangeTo(creep.room.controller) > 1) {
				creep.moveTo(creep.room.controller, {reusePath: 20})
			} else {
				creep.reserveController(creep.room.controller)
			}
		}
	}
}