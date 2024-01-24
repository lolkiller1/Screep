module.exports = {
	run(creep){
		
		if (creep.room.name == "E5N57") creep.moveTo(new RoomPosition(45, 4, 'E4N57'))
		if (creep.room.name == "E4N57") creep.moveTo(new RoomPosition(43, 48, "E4N58"))
		if (creep.room.name == "E4N58") creep.moveTo(new RoomPosition(25, 20, "E3N58"))
		if (creep.room.name == "E3N58") creep.moveTo(new RoomPosition(25, 20, "E3N59"))
		if (creep.room.name == "E3N59") creep.moveTo(new RoomPosition(25, 20, "E3N60"))
		if (creep.room.name == "E3N60") creep.moveTo(new RoomPosition(25, 20, "E4N60"))
		if (creep.room.name == "E4N60") creep.moveTo(new RoomPosition(25, 20, "E5N60"))
		if (creep.room.name == "E5N60") creep.moveTo(new RoomPosition(25, 20, "E6N60"))
		if (creep.room.name == "E6N60") creep.moveTo(new RoomPosition(25, 20, "E6N59"))
			
		if (creep.room.name == "E6N59") {
			var ob = Game.room.E6N59.controller
			creep.moveTo(ob)
			creep.claim(ob)
		}
	}
}