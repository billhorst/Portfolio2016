angular.module('Factories', [])

.factory('timeGreeting', returnTimeGreeting)

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