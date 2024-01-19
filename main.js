var util = require("util")
var tess = require("tess")
var name = require("name")

for(const i in Game.creeps) {
    console.log(Game.creeps[i])
	
	if (Game.creeps[i].name == "tess") {
		tess.run(Game.creeps[i])
	}
	
	if (Game.creeps[i].name == "name") {
		name.run(Game.creeps[i])
	}
	
}

util.spawnCreep("Tess", {m:2,w:1,c:1}, {status:"harvesting"}, 'E5N57')


console.log("new test")