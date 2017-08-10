(function() {
	'use strict';

	angular
		.module('barebone.chapters')
		.controller('ChaptersController', ChaptersController);

	function ChaptersController(bible, $stateParams) {
		let book = $stateParams.book;
		let vm = angular.extend(this, {
			book: book,
			title: bible.name(book),
			chapters: bible.chapters(book)
		});
	}
})();