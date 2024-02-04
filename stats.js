module.exports = {
	roomLevels() {
		var myRooms = ["E5N57","E6N57","E6N58","E6N59","E7N57","E7N58",]
		for (var i in myRooms) {
			var controller = Game.rooms[myRooms[i]].controller
			console.log(Game.rooms[myRooms[i]] + ": " + controller.progress/controller.progressTotal)
		}
	},
	roomRamps() {
			var myRooms = ["E6N57","E6N58","E6N59","E7N57","E7N58"]
			for (var w in myRooms) {
				var lowest = 0
				var lowestAmt = 999999999
				var hightest = 0
				var highestAmt = -1 
				var creep = Game.creeps[myRooms[w] + "_Miner"] != null ? Game.creeps[myRooms[w] + "_Miner"] : Game.creeps[myRooms[w] + "_Upgrader"]
				var ramps = creep.room.find(FIND_STRUCTURES, {filter: {structureType:STRUCTURE_RAMPART}})
				for (var i in ramps) {
					var ramp = ramps[i]
					if (ramp.hits < lowestAmt) {
						lowest = i
						lowestAmt = ramp.hits
					}
					if (ramp.hits > highestAmt) {
						highest = i
						highestAmt = ramp.hits
					}
				}
				console.log("Room: "+ myRooms[w] + ", lowest: " + lowestAmt + ", highest: " + highestAmt)
			}
		}
}