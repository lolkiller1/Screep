var util = require("util")
var tess = require("tess")

for(const i in Game.creeps) {
    
	if (Game.creeps[i].name == "tess") {
		tess.run(Game.creeps[i])
	}
	
	
}

util.spawnCreep("Tess", {m:2,w:1,c:1}, {status:"harvesting"}, 'E5N57')


console.log("new test")