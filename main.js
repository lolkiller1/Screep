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
var room = require("room")

if (Game.spawns["E5N57"].hits < Game.spawns["E5N57"].hitsMax) {
	Game.getObjectById("5bbcad319099fc012e636ce9").activateSafeMode()
}

var myTower = Game.getObjectById("65ae09ade53e4a11e1675b1e")
var myTower2 = Game.getObjectById("65b198c63d017d635f88c752")

tower.run(myTower)
tower.run(myTower2)

room.run("E6N59")
room.run("E6N58")
room.run("E6N57")
room.run("E7N58")
room.run("E7N57")

var spawn = Game.spawns["E5N57"]

for(const i in Memory.creeps) {
	try {
		if (Game.creeps[i] == undefined) {
			if (i != "waller" && i.search("Waller") == -1 && i.search("Miner") == -1) {
			    delete Memory.creeps[i]
			}
			continue
		}
		
		var creep = Game.creeps[i]

		if (creep.name == "tess") {
			tess.run(creep)
		}
	
		if (creep.name == "tess2") {
			tess.run(creep)
		}
	
		if (creep.name == "tess3") {
			tess.run(creep)
		}
	
		if (creep.name == "tess4") {
			tess.run(creep)
		}
	
		if (creep.name == "tess5") {
			tess.run(creep)
		}
	
		if (creep.name == "tess6") {
			tess.run(creep)
		}
	
		if (creep.name == "tess7") {
			tess.run(creep)
		}
	
		if (creep.name == "tess8") {
			tess.run(creep)
		}
	
		if (creep.name == "name") {
			if (creep.room.energyAvailable < creep.room.energyCapacityAvailable) {
				name.run(creep)
			} else {
				builder.run(creep)
			}
		
		}
		
		if (creep.name == "builder") {
			builder.run(creep)
		}
	
		if (creep.name == "name2") {
			if (creep.room.energyAvailable < creep.room.energyCapacityAvailable) {
				name.run(creep)
			} else {
				builder.run(creep)
			}
		}
	
		if (creep.name == "name3") {
			filler.run(creep)
		}
		
		if (creep.name == "miner1") {
			miner.run(creep)
		}
		
		if (creep.name == "miner2") {
			miner.run(creep)
		}
		
		if (creep.name == "claimer") {
			claimer.run(creep)
		}
		
		if (creep.name == "outUpgrader") {
			outUpgrader.run(creep)
		}
		
		if (creep.name == "outUpgrader2" || creep.name == "outUpgrader22" || creep.name == "outUpgrader23" || creep.name == "outUpgrader24" || creep.name == "outUpgrader3") {
			outUpgrader2.run(creep)
		}
		

		
		if (creep.name == "outUpgraderB") {
			outUpgrader.build(creep)
		}
		
		if (creep.name == "outUpgrader2B") {
			outUpgrader2.build(creep)
		}
		
		if (creep.name == "outUpgrader3B") {
			outUpgrader3.build(creep)
		}
		
		if (creep.name == "tempFiller") {
			filler.run(creep)
		}
		
		if (creep.name == "tessTheKiller" || creep.name == "tessTheKiller2") {
			attacker.run(creep)
		}
		
		if (creep.name == "dangerMiner" || creep.name == "dangerMiner2") {
			dangerMiner.run(creep)
		}
		
		if (creep.name == "dangerGather" || creep.name == "dangerGather2" || creep.name == "dangerGather3") {
			dangerMiner.gather(creep)
		}
		
		if (creep.name == "waller") {
			waller.run(creep)
		}
	
	} catch (error) {
		console.log("Error: " + error)
	}
	
}

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

if (!Game.creeps["tess"] && !spawning) {
	util.spawnCreep("tess",  {m:10,w:5,c:5}, {status:"harvesting"}, 'E5N57')
	spawning = true

}

if (!Game.creeps["tess2"] && !spawning) {
	util.spawnCreep("tess2", {m:10,w:5,c:5}, {status:"harvesting"}, 'E5N57')
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
	util.spawnCreep("dangerGather", {c:15,m:15}, {status:"harvesting"},'E5N57')
	spawning = true
}

if (!Game.creeps["dangerGather2"] && !spawning) {
	util.spawnCreep("dangerGather2", {c:15,m:15}, {status:"harvesting"},'E5N57')
	spawning = true

}




if (!Game.creeps["waller"] && !spawning) {
	util.spawnCreep("waller", {c:2,m:4,w:2}, {status:"harvesting"},'E5N57')
	spawning = true
}




