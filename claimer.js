module.exports = {
	run(creep){
		if (creep.room.name == "E7N57") {
			creep.moveTo(49,28)
		}
		if (creep.room.name == "E8N57") {
			var ob = creep.room.controller
			creep.moveTo(ob)
			creep.claimController(ob)
		}
	}
}