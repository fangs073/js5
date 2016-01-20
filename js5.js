var app = angular.module("app", []);


angular.module('app')
	.controller('profileController', ['$scope', function($scope){

		$scope.formValues = {
			'aboutMe' : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.'
			, mission: 'Some lorem ispum'
		}

		function DisplayState () {
			this.display = true;
			this.toggle = function() {
				this.display = !this.display;
			}
		}

		$scope.displayAboutMe = new DisplayState();
		$scope.displayMission = new DisplayState();


}])