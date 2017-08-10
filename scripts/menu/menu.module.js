(function() {
	'use strict';

	angular
		.module('barebone.menu', [
			'ionic'
		])
		.config($stateProvider => {
			$stateProvider
				.state('app', {
					abstract: true,
					templateUrl: 'scripts/menu/menu.html',
					controller: 'MenuController as vm'
				});
		});
})();