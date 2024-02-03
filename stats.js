module.exports = {
	roomLevels() {
		var myRooms = ["E5N57","E6N57","E6N58","E6N59","E7N57","E7N58",]
		for (var i in myRooms) {
			var controller = Game.rooms[myRooms[i]].controller
			console.log(Game.rooms[myRooms[i]] + ": " + controller.progress/controller.progressTotal)
		}
	}
}