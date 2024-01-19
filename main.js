var util = require("util")
var tess = require("tess")

util.spawnCreep("Tess", {m:2,w:1,c:1}, {status:"harvesting"}, 'E5N57')

tess.run(Game.creeps["tess"])

console.log("new test")