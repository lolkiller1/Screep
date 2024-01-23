var util = require("util")
var tess = require("tess")
var name = require("name")
var tower = require("tower")
var filler = require("filler")
var builder = require("builder")

if (Game.spawns["E5N57"].hits < Game.spawns["E5N57"].hitsMax) {
	Game.getObjectById("5bbcad319099fc012e636ce9").activateSafeMode()
}

var myTower = Game.getObjectById("65ae09ade53e4a11e1675b1e")

tower.run(myTower)

for(const i in Memory.creeps) {
	try {
		if (Game.creeps[i] == undefined) {
			delete Memory.creeps[i]
		}

		if (Game.creeps[i].name == "tess") {
			tess.run(Game.creeps[i])
		}
	
		if (Game.creeps[i].name == "tess2") {
			tess.run(Game.creeps[i])
		}
	
		if (Game.creeps[i].name == "tess3") {
			tess.run(Game.creeps[i])
		}
	
		if (Game.creeps[i].name == "tess4") {
			tess.run(Game.creeps[i])
		}
	
		if (Game.creeps[i].name == "tess5") {
			tess.run(Game.creeps[i])
		}
	
		if (Game.creeps[i].name == "tess6") {
			tess.run(Game.creeps[i])
		}
	
		if (Game.creeps[i].name == "tess7") {
			tess.run(Game.creeps[i])
		}
	
		if (Game.creeps[i].name == "tess8") {
			tess.run(Game.creeps[i])
		}
	
		if (Game.creeps[i].name == "name") {
			if (Game.creeps[i].room.energyAvailable < Game.creeps[i].room.energyCapacityAvailable) {
				name.run(Game.creeps[i])
			} else {
				builder.run(Game.creeps[i])
			}
		
			}
	} catch (error) {
		console.log("Error: " + error)
	}
	
	if (Game.creeps[i].name == "name2") {
		if (Game.creeps[i].room.energyAvailable < Game.creeps[i].room.energyCapacityAvailable) {
			name.run(Game.creeps[i])
		} else {
			builder.run(Game.creeps[i])
		}
	}
	
	if (Game.creeps[i].name == "name3") {
		if (Game.getObjectById("65ae09ade53e4a11e1675b1e").store.getFreeCapacity(RESOURCE_ENERGY) > 0) {
			filler.run(Game.creeps[i])
		} else if (Game.creeps[i].room.energyAvailable < Game.creeps[i].room.energyCapacityAvailable) {
			name.run(Game.creeps[i])
		} else {
			builder.run(Game.creeps[i])
		}
		
	}
	
}


util.spawnCreep("tess",  {m:4,w:2,c:2}, {status:"harvesting"}, 'E5N57')
util.spawnCreep("tess2", {m:4,w:2,c:2}, {status:"harvesting"}, 'E5N57')
util.spawnCreep("tess3", {m:4,w:2,c:2}, {status:"harvesting"}, 'E5N57')
util.spawnCreep("tess4", {m:4,w:2,c:2}, {status:"harvesting"}, 'E5N57')
util.spawnCreep("tess5", {m:4,w:2,c:2}, {status:"harvesting"}, 'E5N57')
util.spawnCreep("tess6", {m:4,w:2,c:2}, {status:"harvesting"}, 'E5N57')
util.spawnCreep("tess7", {m:4,w:2,c:2}, {status:"harvesting"}, 'E5N57')
util.spawnCreep("tess8", {m:4,w:2,c:2}, {status:"harvesting"}, 'E5N57')
util.spawnCreep("name",  {m:4,w:2,c:2}, {status:"harvesting"}, 'E5N57')
util.spawnCreep("name2", {m:4,w:2,c:2}, {status:"harvesting"}, 'E5N57')
util.spawnCreep("name3", {m:4,w:2,c:2}, {status:"harvesting"}, 'E5N57')