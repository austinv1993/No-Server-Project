angular.module('app').controller('infoCtrl', function($scope, infoService) {
				//PLANETS//
	$scope.getPlanets = function () {
		infoService.getPlanets().then(function(response) {
			$scope.planetInfo = response;
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
		infoService.getCharacters().then(function(response) {
			$scope.charInfo = response;
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
		infoService.getStarships().then(function(response) {
			$scope.starshipInfo = response;
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
	
})
