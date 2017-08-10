(function() {
	'use strict';

	angular
		.module('barebone.verses', [
			'ionic',
			'barebone.common'
		])
		.config($stateProvider => {
			$stateProvider
				.state('app.verses', {
					url: '/verses/:book/:chapter',
					views: {
						'menuContent': {
							templateUrl: 'scripts/verses/verses.html',
							controller: 'VersesController as vm'
						}
					}
				});
		});
})();