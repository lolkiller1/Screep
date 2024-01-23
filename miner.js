module.exports = {
	run(creep){
		var source = creep.memory["source"]
		
		creep.moveTo(creep.memory.spot.x, creep.memory.spot.y)
		creep.harvest(Game.getObjectById(source))
	}
}