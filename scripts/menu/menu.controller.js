(function() {
	'use strict';

	angular
		.module('barebone.menu')
		.controller('MenuController', MenuController);

	function MenuController(bible) {
		let vm = angular.extend(this, {
			books: bible.books()
		});
	}
})();