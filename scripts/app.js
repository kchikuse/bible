angular.module('bible', [
	'ionic',
	'templates',
	'barebone.common',
	'barebone.home',
	'barebone.chapters',
	'barebone.verses',
	'barebone.menu'
])

.run(function() {

})

.config(function($urlRouterProvider) {
	$urlRouterProvider.otherwise('/');
});