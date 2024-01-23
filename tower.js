var util = require("util")
var _ = require("lodash")

module.exports = {
	run(tower){
		var enemy = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS)
		if (enemy) {
			tower.attack(enemy)
		} else {
			var roads = tower.room.find(FIND_MY_STRUCTURES, {filter: { structureType: STRUCTURE_ROAD }
			roads = _.filter(roads, function(road){return road.hits * 2 < road.hitsMax})
			if (roads[0]) {
				tower.repair(road)
			}
			
});
		}
	}
	
}