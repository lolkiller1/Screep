module.exports = {
	run(creep){
		if (creep.room.name == "E7N58") {
			creep.moveTo(49,5)
			return
		}
		
		if (creep.room.name == "E8N58") {
			creep.moveTo(9,0)
			return
		}
		
		if (creep.room.name == "E8N59") {
			var ob = creep.room.controller
			creep.moveTo(ob)
			creep.claimController(ob)
		}
	}
}