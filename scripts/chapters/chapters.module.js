(function() {
	'use strict';

	angular
		.module('barebone.chapters', [
			'ionic',
			'barebone.common'
		])
		.config($stateProvider => {
			$stateProvider
				.state('app.chapters', {
					url: '/chapters/:book',
					views: {
						'menuContent': {
							templateUrl: 'scripts/chapters/chapters.html',
							controller: 'ChaptersController as vm'
						}
					}
				});
		});
})();