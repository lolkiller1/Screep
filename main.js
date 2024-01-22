var util = require("util")
var tess = require("tess")
var name = require("name")
var builder = require("builder")

if (Game.spawns["E5N57"].hits < Game.spawns["E5N57"].hitsMax) {
	Game.getObjectById("5bbcad319099fc012e636ce9").activateSafeMode()
}

for(const i in Memory.creeps) {
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
		if (Game.spawns["E5N57"].store.getFreeCapacity(RESOURCE_ENERGY) > 0) {
			name.run(Game.creeps[i])
		} else {
			builder.run(Game.creeps[i])
		}
	}
	
	if (Game.creeps[i].name == "name2") {
		if (Game.spawns["E5N57"].store.getFreeCapacity(RESOURCE_ENERGY) > 0) {
			name.run(Game.creeps[i])
		} else {
			builder.run(Game.creeps[i])
		}
	}
	
	if (Game.creeps[i].name == "name3") {
		name.run(Game.creeps[i])
	}
	
}

util.spawnCreep("name", {m:2,w:1,c:1}, {status:"harvesting"}, 'E5N57')
util.spawnCreep("name2", {m:2,w:1,c:1}, {status:"harvesting"}, 'E5N57')
util.spawnCreep("name3", {m:2,w:1,c:1}, {status:"harvesting"}, 'E5N57')
util.spawnCreep("tess", {m:2,w:1,c:1}, {status:"harvesting"}, 'E5N57')
util.spawnCreep("tess2", {m:2,w:1,c:1}, {status:"harvesting"}, 'E5N57')
util.spawnCreep("tess3", {m:2,w:1,c:1}, {status:"harvesting"}, 'E5N57')
util.spawnCreep("tess4", {m:2,w:1,c:1}, {status:"harvesting"}, 'E5N57')
util.spawnCreep("tess5", {m:2,w:1,c:1}, {status:"harvesting"}, 'E5N57')
util.spawnCreep("tess6", {m:2,w:1,c:1}, {status:"harvesting"}, 'E5N57')
util.spawnCreep("tess7", {m:2,w:1,c:1}, {status:"harvesting"}, 'E5N57')
util.spawnCreep("tess8", {m:2,w:1,c:1}, {status:"harvesting"}, 'E5N57')