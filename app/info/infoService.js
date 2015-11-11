angular.module('app').service('infoService', function ($http, $q) {
	var baseUrl = 'http://swapi.co/api/';
	
	// this.getPlanets = function() {
	// 	return $http.get(baseUrl + 'planets/').then(function(response) {
			
	// 		var planetData = response.data.results;
			
	// 		return planetData;
	// 	})
	// }
	this.getPlanets = function() {
          var deferred = $q.defer(),
              nextPage = 'http://swapi.co/api/planets/',
              planets = [];
              
          console.log('loading data...');
          
          getNext(nextPage);
          function getNext(nextUrl) {
              $http.get(nextUrl)
                  .success(function (response) {
                      planets = planets.concat(response.results);
                      nextPage = response.next;
                      if (nextPage) {
                          getNext(nextPage);
                      } else {
                          deferred.resolve(planets);
                          console.log('data loaded');
                      }
                  }).error(function (error) {
                      console.log('error:', error);
                      deferred.reject(error);
                  });
          }
          return deferred.promise;
      }
	// this.getCharacters = function() {
	// 	return $http.get(baseUrl + 'people/').then(function(response) {
	// 		//console.log(response)
	// 		var charInfo = response.data.results;
	// 		//console.log(planetData)
	// 		return charInfo;
	// 	})
	// }
	this.getCharacters = function() {
          var deferred = $q.defer(),
              nextPage = 'http://swapi.co/api/people/',
              characters = [];
              
          console.log('loading data...');
          
          getNext(nextPage);
          function getNext(nextUrl) {
              $http.get(nextUrl)
                  .success(function (response) {
                      characters = characters.concat(response.results);
                      nextPage = response.next;
                      if (nextPage) {
                          getNext(nextPage);
                      } else {
                          deferred.resolve(characters);
                          console.log('data loaded');
                      }
                  }).error(function (error) {
                      console.log('error:', error);
                      deferred.reject(error);
                  });
          }
          return deferred.promise;
      }
	// this.getStarships = function() {
	// 	return $http.get(baseUrl + 'starships/').then(function(response) {
	// 		//console.log(response)
	// 		var starshipInfo = response.data.results;
	// 		//console.log(planetData)
	// 		return starshipInfo;
	// 	})
	// }
	this.getStarships = function() {
          var deferred = $q.defer(),
              nextPage = 'http://swapi.co/api/starships/',
              starships = [];
              
          console.log('loading data...');
          
          getNext(nextPage);
          function getNext(nextUrl) {
              $http.get(nextUrl)
                  .success(function (response) {
                      starships = starships.concat(response.results);
                      nextPage = response.next;
                      if (nextPage) {
                          getNext(nextPage);
                      } else {
                          deferred.resolve(starships);
                          console.log('data loaded');
                      }
                  }).error(function (error) {
                      console.log('error:', error);
                      deferred.reject(error);
                  });
          }
          return deferred.promise;
      }
	
})