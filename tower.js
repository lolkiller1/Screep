var util = require("util")

module.exports = {
	run(tower){
		var enemy = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS)
		if (enemy) {
			tower.attack(enemy)
		} else if (Game.time % 2 == 0) {
			var roads = tower.room.find(FIND_STRUCTURES, {filter: { structureType: STRUCTURE_RAMPART } })
			roads = _.filter(roads, function(road){return road.hits < 1000})
			if (roads[0]) {
				tower.repair(roads[0])
			}
		}
	},
	run(tower, roads) {
		var enemy = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS)
		if (enemy) {
			tower.attack(enemy)
		} else if (Game.time % 2 == 0) {
			var ramps = tower.room.find(FIND_STRUCTURES, {filter: { structureType: STRUCTURE_RAMPART } })
			ramps = _.filter(ramps, function(ramp){return ramp.hits < 1000})
			if (ramps[0]) {
				tower.repair(ramps[0])
			}
		} else if (roads && roads.length > 0) {
			for (var i in roads) {
				if (roads[i].hits / roads[i].hitsMax < .5) {
					tower.repair(roads[i])
					break
				}
			}
		}
	}
	
}