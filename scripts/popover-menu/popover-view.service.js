(function() {
	'use strict';

	angular
		.module('barebone.common')
		.factory('popoverViewService', popoverViewService);

	function popoverViewService($rootScope, $ionicPopover, $q) {
		let scope = $rootScope.$new();
		
		return {
			show: show,
			create: create
		};

		function show(event) {
			let defer = $q.defer();

			scope.select = function(option) {
				defer.resolve(option);
				scope.popover.hide();
			}

			scope.popover.show(event);
			return defer.promise;
		}

		function create(options) {
			scope.options = options;
			$ionicPopover.fromTemplateUrl('scripts/popover-menu/popover-view.html', {
				scope: scope
			}).then(p => scope.popover = p);

			return scope;
		}
	}
})();
