(function() {
	
	'use strict';

	angular
		.module('barebone.common')
		.factory('state', state);

	state.$inject = ['$window'];

	function state($window) {

		let store = $window.localStorage;

		let save = state => store.setItem('STATE', state);

		function showNumbers() {

			let state = store.getItem('STATE');

			if(state == null) {
				return true;
			}

			return state === 'true';
		}

		return {
			save: save,
			showNumbers: showNumbers,
		};
	}

})();