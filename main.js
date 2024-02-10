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
var attacker = require("attacker")
var dangerMiner = require("dangerMiner")
var waller = require("waller")
var reserver = require("reserver")
var room = require("room")
var roomTask = require("roomTask")

if (Game.spawns["E5N57"].hits < Game.spawns["E5N57"].hitsMax) {
	Game.getObjectById("5bbcad319099fc012e636ce9").activateSafeMode()
}

var link1 = Game.getObjectById("65bf22a6682254d4499b95d0")
var link2 = Game.getObjectById("65bf2dcab1cdfc13c8096d3f")

if (Game.time % 4 == 0) link2.transferEnergy(link1)

room.run("E5N57", {roaded:false})
room.run("E6N58", {roaded:true})
room.run("E6N57", {roaded:true})
room.run("E7N58", {roaded:true})
room.run("E7N57", {roaded:true})
room.run("E8N57", {roaded:true})
room.run("E8N59", {roaded:true})

for(const i in Memory.creeps) {
	try {
		if (Game.creeps[i] == undefined) {
			if (i != "waller" && i.search("Waller") == -1 && i.search("Miner") == -1) {
			    delete Memory.creeps[i]
			}
			continue
		}
	} catch (error) {
		console.log("Error: " + error)
	}
}

if (!Game.creeps["reserver"]) {
		util.spawnCreep("reserver",  {claim:8,m:8}, {status:"harvesting"}, 'E5N57')
	} else {
		reserver.run(Game.creeps["reserver"])
 }

/*

var spawning = spawn.spawning != null

if (!Game.creeps["name"] && !spawning) {
	util.spawnCreep("name",  {m:12,c:12}, {status:"harvesting"}, 'E5N57')
	spawning = true
}

if (!Game.creeps["name2"] && !spawning) {
	util.spawnCreep("name2", {m:12,c:12}, {status:"harvesting"}, 'E5N57')
	spawning = true
}

if (!Game.creeps["miner1"] && !spawning) {
	util.spawnCreep("miner1", {m:5,w:5}, {source:"5bbcad319099fc012e636ce8", spot:{x:36,y:10}}, 'E5N57')
	spawning = true

}


if (!Game.creeps["miner2"] && !spawning) {
	util.spawnCreep("miner2", {m:5,w:5}, {source:"5bbcad319099fc012e636ce7", spot:{x:30,y:6}}, 'E5N57')
	spawning = true

}

if (!Game.creeps["name3"] && !spawning) {
	util.spawnCreep("name3", {m:10,c:10}, {status:"harvesting"}, 'E5N57')
	spawning = true

}
*/

/*
if (!Game.creeps["builder"] && !spawning) {
	util.spawnCreep("builder",  {m:10,w:6,c:4}, {status:"harvesting"}, 'E5N57')
	spawning = true

}
*/

/*

if (!Game.creeps["tess"] && !spawning) {
	util.spawnCreep("tess",  {m:12,w:10,c:2}, {status:"harvesting"}, 'E5N57')
	spawning = true

}

if (!Game.creeps["tess2"] && !spawning) {
	util.spawnCreep("tess2", {m:12,w:10,c:2}, {status:"harvesting"}, 'E5N57')
	spawning = true

}

if (!Game.creeps["tessTheKiller"] && !spawning) {
	util.spawnCreep("tessTheKiller",  {r:4,m:8,h:4}, {type:"ranged"}, 'E5N57')
	spawning = true

}

if (!Game.creeps["tessTheKiller2"] && !spawning) {
	util.spawnCreep("tessTheKiller2",  {r:4,m:8,h:4}, {type:"ranged"}, 'E5N57')
	spawning = true

}

if (!Game.creeps["dangerMiner"] && !spawning) {
	util.spawnCreep("dangerMiner", {w:10,m:11,h:1}, {},'E5N57')
	spawning = true

}

if (!Game.creeps["dangerGather"] && !spawning) {
	util.spawnCreep("dangerGather", {c:16,m:16}, {status:"harvesting"},'E5N57')
	spawning = true
}


if (!Game.creeps["dangerGather2"] && !spawning) {
	util.spawnCreep("dangerGather2", {c:15,m:15}, {status:"harvesting"},'E5N57')
	spawning = true

}


if (!Game.creeps["waller"] && !spawning) {
	util.spawnCreep("waller", {c:1,m:2,w:1}, {status:"harvesting"},'E5N57')
	spawning = true
}
*/

/*
	---------
	OUTCREEPS
	---------


if (!Game.creeps["claimer"]) {
	util.spawnCreep("claimer", {claim:1,m:1}, {status:"harvesting"},'E7N58')
}


if (!Game.creeps["outUpgrader"]) {
	util.spawnCreep("outUpgrader", {w:3,c:3,m:6}, {status:"harvesting"},'E7N57')
}

if (!Game.creeps["outUpgraderB"]) {
	util.spawnCreep("outUpgraderB", {w:4,c:4,m:8}, {status:"harvesting"},'E7N57')
}

if (!Game.creeps["outUpgrader2"]) {
	util.spawnCreep("outUpgrader2", {w:3,c:3,m:6}, {status:"harvesting"},'E7N58')
}

if (!Game.creeps["outUpgrader2B"]) {
	util.spawnCreep("outUpgrader2B", {w:4,c:4,m:8}, {status:"harvesting"},'E7N58')
}

*/