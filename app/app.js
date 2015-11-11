var app = angular.module('app', ['ui.router', 'ui.bootstrap']);


app.config(function($stateProvider, $urlRouterProvider) {
	
		$urlRouterProvider.otherwise('/home')
	
		$stateProvider
			.state('home', {
				url: '/home',
				controller: 'homeCtrl',
				templateUrl: 'app/home/home.html'
				
			})
			.state('info', {
				url: '/info',
				controller: 'infoCtrl',
				templateUrl: 'app/info/info.html'
			})
			.state('gallery', {
				url: '/gallery',
				controller: 'galleryCtrl',
				templateUrl: 'app/gallery/gallery.html'
			})
})