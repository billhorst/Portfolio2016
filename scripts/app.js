angular.module('app', ['Directives', 'Factories'])

.controller('pageController', pageController);

function pageController($scope) {
	$scope.message = {};
	$scope.message.timeGreeting = returnTimeGreeting();

    $scope.background = {
        'morningPic': false,
        'daytimePic': false,
        'eveningPic': false
    }
    var currentPicture = timePicture();
    $scope.background[currentPicture] = true;

	//handle language (last used language, current language display)

	if (typeof(Storage) !== "undefined") {
        //do nothing
    } else {
    	alert("Sorry, your browser may not support all the features of this website.");
    }

    $scope.languageChoice = {};
    $scope.url = {};

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


    //Project links

    $scope.openPlotGeneratorApp = function() {
    	$scope.url.plotGenApp = 'http://billhorst.github.io/PlotGenerator/index.html';
    }

    $scope.openPlotGeneratorCode = function() {
    	$scope.url.plotGenCode = 'https://github.com/billhorst/PlotGenerator';
    }

    $scope.openFlickrSearcherApp = function() {
    	$scope.url.flickrSearcherApp = 'http://billhorst.github.io/FlickrSearcher/index.html';
    }

    $scope.openFlickrSearcherCode = function() {
    	$scope.url.flickrSearcherCode = 'https://github.com/billhorst/FlickrSearcher';
    }

    $scope.openGeographyQuizApp = function() {
        //$scope.url.geographyQuizApp = 'Quiz game after I replace the billhorst one with the new one';
    }

    $scope.openGeographyQuizCode = function() {
        //$scope.url.geographyQuizCode = 'Same as the app: put up after I replace old one on billhorst GitHub';
    }

    $scope.openCalculatorApp = function() {
    	$scope.url.calculatorApp = 'http://billhorst.github.io/Calculator/index.html';
    }

    $scope.openCalculatorCode = function() {
    	$scope.url.calculatorCode = 'https://github.com/billhorst/Calculator';
    }

    $scope.openResumeApp = function() {
    	$scope.url.resumeApp = "http://billhorst.github.io/resume/index.html";
    }

}