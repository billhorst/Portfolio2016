angular.module('Directives', [])

.directive('nameIntro', nameIntro)
.directive('techList', techList)
.directive('projectList', projectList)
.directive('contactInfo', contactInfo)
.directive('footerSection', footerSection)

function nameIntro() {
	return {
		templateUrl: 'templates/nameIntro.html',
		type: 'E'
	}
}

function techList() {
	return {
		templateUrl: 'templates/techList.html',
		type: 'E'
	}
}

function projectList() {
	return {
		templateUrl: 'templates/projectList.html',
		type: 'E'
	}
}

function contactInfo() {
	return {
		templateUrl: 'templates/contactInfo.html',
		type: 'E'
	}
}

function footerSection() {
	return {
		templateUrl: 'templates/footerSection.html',
		type: 'E'
	}
}