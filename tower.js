var util = require("util")
var _ = require("lodash")

module.exports = {
	run(tower){
		var enemy = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS)
		if (enemy) {
			tower.attack(enemy)
		} else if (Game.time % 10 == 0) {
			var roads = tower.room.find(FIND_STRUCTURES, {filter: { structureType: STRUCTURE_RAMPART } })
			roads = _.filter(roads, function(road){return road.hits < 1000})
			if (roads[0]) {
				tower.repair(roads[0])
			}
		}
	}
	
}