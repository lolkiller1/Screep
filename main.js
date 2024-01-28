var util = require("util")
var tess = require("tess")
var name = require("name")
var tower = require("tower")
var filler = require("filler")
var builder = require("builder")
var miner = require("miner")
var claimer = require("claimer")
var outUpgrader = require("outUpgrader")
var outUpgrader2 = require("outUpgrader2")
var outUpgrader3 = require("outUpgrader3")
var room = require("room")

if (Game.spawns["E5N57"].hits < Game.spawns["E5N57"].hitsMax) {
	Game.getObjectById("5bbcad319099fc012e636ce9").activateSafeMode()
}

var myTower = Game.getObjectById("65ae09ade53e4a11e1675b1e")

tower.run(myTower)

room.run("E6N59")
room.run("E6N58")
room.run("E6N57")
room.run("E7N58")
room.run("E7N57")

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
	
		if (Game.creeps[i].name == "name2") {
			if (Game.creeps[i].room.energyAvailable < Game.creeps[i].room.energyCapacityAvailable) {
				name.run(Game.creeps[i])
			} else {
				builder.run(Game.creeps[i])
			}
		}
	
		if (Game.creeps[i].name == "name3") {
			filler.run(Game.creeps[i])
		}
		
		if (Game.creeps[i].name == "miner1") {
			miner.run(Game.creeps[i])
		}
		
		if (Game.creeps[i].name == "miner2") {
			miner.run(Game.creeps[i])
		}
		
		if (Game.creeps[i].name == "claimer") {
			claimer.run(Game.creeps[i])
		}
		
		if (Game.creeps[i].name == "outUpgrader") {
			outUpgrader.run(Game.creeps[i])
		}
		
		if (Game.creeps[i].name == "outUpgrader2") {
			outUpgrader2.run(Game.creeps[i])
		}
		
		if (Game.creeps[i].name == "outUpgrader3") {
			outUpgrader3.run(Game.creeps[i])
		}
		
		if (Game.creeps[i].name == "outUpgraderB") {
			outUpgrader.build(Game.creeps[i])
		}
		
		if (Game.creeps[i].name == "outUpgrader2B") {
			outUpgrader2.build(Game.creeps[i])
		}
		
		if (Game.creeps[i].name == "outUpgrader3B") {
			outUpgrader3.build(Game.creeps[i])
		}
		
		if (Game.creeps[i].name == "tempFiller") {
			filler.run(Game.creeps[i])
		}
	
	} catch (error) {
		console.log("Error: " + error)
	}
	
}

/*
util.spawnCreep("outUpgrader",  {m:6,w:3,c:3}, {status:"harvesting"}, 'E5N57')
util.spawnCreep("outUpgrader2",  {m:6,w:3,c:3}, {status:"harvesting"}, 'E5N57')
util.spawnCreep("outUpgrader3",  {m:2,w:1,c:1}, {status:"harvesting"}, 'E5N57')



util.spawnCreep("outUpgraderB",  {m:10,w:5,c:5}, {status:"harvesting"}, 'E5N57')
util.spawnCreep("outUpgrader2B",  {m:10,w:7,c:3}, {status:"harvesting"}, 'E5N57')
*/

/*
util.spawnCreep("outUpgrader3B",  {m:6,w:3,c:3}, {status:"harvesting"}, 'E5N57')
*/

util.spawnCreep("tess",  {m:10,w:5,c:5}, {status:"harvesting"}, 'E5N57')
util.spawnCreep("tess2", {m:10,w:5,c:5}, {status:"harvesting"}, 'E5N57')
util.spawnCreep("name",  {m:7,w:1,c:6}, {status:"harvesting"}, 'E5N57')
util.spawnCreep("name2", {m:7,w:1,c:6}, {status:"harvesting"}, 'E5N57')
//util.spawnCreep("name",  {m:11,w:3,c:8}, {status:"harvesting"}, 'E5N57')
//util.spawnCreep("name2", {m:11,w:3,c:8}, {status:"harvesting"}, 'E5N57')

util.spawnCreep("name3", {m:10,c:10}, {status:"harvesting"}, 'E5N57')
util.spawnCreep("miner1", {m:5,w:5}, {source:"5bbcad319099fc012e636ce8", spot:{x:36,y:10}}, 'E5N57')
util.spawnCreep("miner2", {m:5,w:5}, {source:"5bbcad319099fc012e636ce7", spot:{x:30,y:6}}, 'E5N57')