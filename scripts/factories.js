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
	// var hourNow = 8;
	var tPic = "";
	if (hourNow > 19 || hourNow < 5) {
		tPic = "nightPic";
	} else if (hourNow > 14) {
		tPic = "afternoonPic";
	} else  if (hourNow > 9){
		tPic = "daytimePic";
	} else if (hourNow >= 5 && hourNow <=9) {
		tPic = "morningPic";
	} else {
		tPic = "daytimePic";
	}
	return tPic;
}