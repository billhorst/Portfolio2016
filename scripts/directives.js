angular.module('Directives', [])

.directive('nameIntro', nameIntro)
.directive('techList', techList)
.directive('projectList', projectList)
.directive('contactInfo', contactInfo)
.directive('expandCollapseButton', expandCollapseButton)

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

function expandCollapseButton() {
	return {
		template:	
		'<div>'+
		'<button ng-click="expandProjects()" ng-show="languageChoice.isEnglish && !showProjects.projectsExpanded" class="expandCollapseProjects">Expand Project List</button>'+
		'<br />'+
		'<button ng-click="expandProjects()" ng-show="languageChoice.isJapanese && !showProjects.projectsExpanded" class="expandCollapseProjects">制作物を全て見る</button>'+
		'</div>'+
		'<div>'+
		'<button ng-click="collapseProjects()" ng-show="languageChoice.isEnglish && showProjects.projectsExpanded" class="expandCollapseProjects">Collapse Project List</button>'+
		'<br />'+
		'<button ng-click="collapseProjects()" ng-show="languageChoice.isJapanese && showProjects.projectsExpanded" class="expandCollapseProjects">制作物を隠す</button>'+
		'</div>',
		type: 'E'
	}
}