angular.module('Factories', [])

.factory('timeGreeting', returnTimeGreeting)
.factory('timePicture', timePicture)

function returnTimeGreeting() {
	var today = new Date();
	var hourNow = today.getHours();
	var eGreeting;
	var jGreeting;
	var greetings = [];

	if (hourNow > 16) {
		eGreeting = "Evening!";
		jGreeting = "こんばんは！";
	} else if (hourNow > 12) {
		eGreeting = "Afternoon!";
		jGreeting = "こんにちは！";
	} else {
		eGreeting = "Morning!"
		jGreeting = "おはようございます！";
	}
	greetings.push(eGreeting);
	greetings.push(jGreeting);
	return greetings;
}

function timePicture() {
	var today = new Date();
	var hourNow = today.getHours();
	// var tPic = "luca";
	// if (hourNow%2==0) {
	// 	tPic = "luca";
	// } else {
	// 	tPic = "jBiru";
	// }
	var tPic = "";
	if (hourNow > 19 || hourNow < 6) {
		tPic = "nightPic";
	} else if (hourNow > 14) {
		tPic = "afternoonPic";
	} else  if (hourNow > 8){
		tPic = "daytimePic";
	} else {
		tPic = "morningPic";
	}
	return tPic;
}