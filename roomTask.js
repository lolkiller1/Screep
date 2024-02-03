module.exports = {
	init(room) {
		if (!Memory[room.name]) {
			Memory[room.name] = {}
		}
	},
	storeTowers(room) {
		if (Game.time / 10 != 0) return
		
		delete Memory[room.name].towers
		Memory[room.name].towers = []
		
		var towers = room.find(FIND_MY_STRUCTURES, {filter: { structureType: STRUCTURE_TOWER }})
		for (var tower in towers) {
			Memory[room.name].towers.push(towers[tower])
		}
	}
}