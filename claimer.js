module.exports = {
	run(creep){
		console.log(creep.room.name)
		if (creep.room.name == "E5N57") console.log(creep.moveTo(new RoomPosition(25, 20, 'E4N57')))
		if (creep.room.name == "E4N57") creep.moveTo(new RoomPosition(25, 20, "E4N58")
		if (creep.room.name == "E4N58") creep.moveTo(new RoomPosition(25, 20, "E3N58")
		if (creep.room.name == "E3N58") creep.moveTo(new RoomPosition(25, 20, "E3N59")
		if (creep.room.name == "E3N59") creep.moveTo(new RoomPosition(25, 20, "E3N60")
		if (creep.room.name == "E3N60") creep.moveTo(new RoomPosition(25, 20, "E4N60")
		if (creep.room.name == "E4N60") creep.moveTo(new RoomPosition(25, 20, "E5N60")
		if (creep.room.name == "E5N60") creep.moveTo(new RoomPosition(25, 20, "E6N60")
		if (creep.room.name == "E6N60") creep.moveTo(new RoomPosition(25, 20, "E6N59")
			
		if (creep.room.name == "E6N59") {
			var ob = Game.room.E6N59.controllers
			creep.moveTo(ob)
			creep.claim(ob)
		}
	}
}