angular.module('Factories', [])

// .factory('timeGreeting', returnTimeGreeting)
// .factory('timePicture', timePicture)

.factory('TimeFactory', function() {

	var today = new Date();
	var hourNow = today.getHours();

	return {
		returnTimeGreeting: function() {
			if (hourNow > 16) {
				return ["Evening!", "こんばんは！"];
			} else if (hourNow > 12) {
				return ["Afternoon!", "こんにちは！"];
			} else {
				return ["Morning!", "おはようございます！"]
			}
		},

		timePicture: function() {
			var tPic = "";
			if (hourNow > 16) {
				tPic = "eveningPic";
			} else if (hourNow > 12) {
				tPic = "daytimePic";
			} else {
				tPic = "morningPic";
			}
			return tPic;
		}
	};

})