angular.module('app', ['Directives', 'Factories'])

.controller('pageController', pageController);

function pageController($scope, TimeFactory) {

    //gets greeting depending on time of day
	$scope.message = {};
	$scope.message.timeGreeting = TimeFactory.returnTimeGreeting();

    //gets time of day and sets appropriate background image
    $scope.background = {
        'morningPic': false,
        'daytimePic': false,
        'eveningPic': false
    }
    var currentPicture = TimeFactory.timePicture();
    $scope.background[currentPicture] = true;

	//handles language (last used language, current language display)
	if (typeof(Storage) !== "undefined") {
        //do nothing
    } else {
    	alert("Sorry, your browser may not support all the features of this website.");
    }

    $scope.languageChoice = {};

    if(localStorage.getItem("languagePreference") === "English") {
    	$scope.languageChoice.isEnglish = true; 
    } else if (localStorage.getItem("languagePreference") === "Japanese") {
    	$scope.languageChoice.isJapanese = true;
    } else {
    	$scope.languageChoice.isEnglish = true;
    }

    $scope.toEnglish = function() {
    	$scope.languageChoice = {};
    	$scope.languageChoice.isEnglish = true;
    	localStorage.setItem("languagePreference", "English");
    }

    $scope.toJapanese = function() {
    	$scope.languageChoice = {};
    	$scope.languageChoice.isJapanese = true;
    	localStorage.setItem("languagePreference", "Japanese");
    }

    //projects from projectInfo.js

    $scope.projectArray = arrayOfProjects;

    //expand projects

    $scope.showProjects = {
        "projectsExpanded": false,
    }
    $scope.expandProjects = function() {
        $("#projectList").removeClass("hideProjects");
        $scope.showProjects.projectsExpanded = true;
    }

    $scope.collapseProjects = function() {
        $("#projectList").addClass("hideProjects");
        $scope.showProjects.projectsExpanded = false;
    }


    //to view resume on GitHub
    $scope.url = {};

    $scope.openResumeApp = function() {
    	$scope.url.resumeApp = "http://billhorst.github.io/resume/index.html";
    }

}