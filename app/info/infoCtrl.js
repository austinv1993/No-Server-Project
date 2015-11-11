angular.module('app').controller('infoCtrl', function($scope, infoService) {
				//PLANETS//
	$scope.getPlanets = function () {
		$scope.showLoadingPlanets = true;
		infoService.getPlanets().then(function(response) {
			$scope.planetInfo = response;
			$scope.showLoadingPlanets = false;
		})
	}
		$scope.showPlanetAttributes = function(currentPlanet) {
			if ($scope.selectedPlanet === currentPlanet) {
				$scope.selectedPlanet = '';
			} else {
				$scope.selectedPlanet = currentPlanet;
			}
			
			
		}
				//END PLANETS//
				//CHARACTERS//
	$scope.getCharacters = function () {
		$scope.showLoadingChars = true;
		infoService.getCharacters().then(function(response) {
			$scope.charInfo = response;
			$scope.showLoadingChars = false;
		})
	}
		$scope.showCharAttributes = function(currentChar) {
			if ($scope.selectedCharacter === currentChar) {
				$scope.selectedCharacter = '';
			} else {
				$scope.selectedCharacter = currentChar;
			}
			
		}
				//END CHARACTERS//
				//STARHSIPS//
	
	$scope.getStarships = function () {
		$scope.showLoadingStarships = true;
		infoService.getStarships().then(function(response) {
			$scope.starshipInfo = response;
			$scope.showLoadingStarships = false;
		})
	}
	
		$scope.showStarshipAttributes = function(currentStarship) {
			if ($scope.selectedStarship === currentStarship) {
				$scope.selectedStarship = '';
			} else {
				$scope.selectedStarship = currentStarship;
			}
		}
				//END STARSHIPS//
	$scope.showLoadingPlanets = false;
	$scope.showLoadingChars = false;
	$scope.showLoadingStarships = false;
	$scope.select = function(item) {
		$scope.selected = item;
	}
	
})
