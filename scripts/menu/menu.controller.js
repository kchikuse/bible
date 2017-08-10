(function() {
	'use strict';

	angular
		.module('barebone.menu')
		.controller('MenuController', MenuController);

	MenuController.$inject = ['bible'];

	function MenuController(bible) {
		let vm = angular.extend(this, {
			books: bible.books()
		});
	}
})();