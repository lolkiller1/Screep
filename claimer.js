module.exports = {
	run(creep){
		if (creep.room.name == "E5N57") creep.moveTo(Game.rooms["E4N57"])
		if (creep.room.name == "E4N57") creep.moveTo(Game.rooms["E4N58"])
		if (creep.room.name == "E4N58") creep.moveTo(Game.rooms["E3N58"])
		if (creep.room.name == "E3N58") creep.moveTo(Game.rooms["E3N59"])
		if (creep.room.name == "E3N59") creep.moveTo(Game.rooms["E3N60"])
		if (creep.room.name == "E3N60") creep.moveTo(Game.rooms["E4N60"])
		if (creep.room.name == "E4N60") creep.moveTo(Game.rooms["E5N60"])
		if (creep.room.name == "E5N60") creep.moveTo(Game.rooms["E6N60"])
		if (creep.room.name == "E6N60") creep.moveTo(Game.rooms["E6N59"])
			
		if (creep.room.name == "E6N59") {
			var ob = Game.room.E6N59.controllers
			creep.moveTo(ob)
			creep.claim(ob)
		}
	}
}