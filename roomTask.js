module.exports = {
	init(room) {
		if (!Memory[room.name]) {
			Memory[room.name] = {}
		}
	},
	getTowers(room) {
		var towers
		if (Game.time % 10 != 0) {
			towers = []
			for (var t in Memory[room.name].towers) {
				towers.push(Game.getObjectById(Memory[room.name].towers[t]))
			}
			return towers
		}
		
		delete Memory[room.name].towers
		Memory[room.name].towers = []
		
		towers = room.find(FIND_MY_STRUCTURES, {filter: { structureType: STRUCTURE_TOWER }})
		for (var tower in towers) {
			Memory[room.name].towers.push(towers[tower].id)
		}
		return towers
	}
}