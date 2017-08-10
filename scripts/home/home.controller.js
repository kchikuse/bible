(function() {
	'use strict';

	angular
		.module('barebone.home')
		.controller('HomeController', HomeController);

	HomeController.$inject = ['state'];

	function HomeController(state) {
		let vm = angular.extend(this, {
			showNumbers: state.showNumbers(),
			toggleNumbers: () => state.save(vm.showNumbers),
		});
	}

})();
