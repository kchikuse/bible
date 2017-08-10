(function() {
	'use strict';

	angular
		.module('barebone.home', [
			'ionic',
			'barebone.common'
		])
		.config($stateProvider => {
			$stateProvider
				.state('app.home', {
					url: '/',
					views: {
						'menuContent': {
							templateUrl: 'scripts/home/home.html',
							controller: 'HomeController as vm'
						}
					}
				});
		});
})();