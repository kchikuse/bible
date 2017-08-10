(function() {
	'use strict';

	angular
		.module('barebone.chapters')
		.controller('VersesController', VersesController);

	VersesController.$inject = ['bible', 'state', '$state', '$stateParams', '$sce', 'popoverViewService'];

	function VersesController(bible, state, $state, $stateParams, $sce, popoverViewService) {
		let book = parseInt($stateParams.book);
		let chapter = parseInt($stateParams.chapter);
		let chapters = bible.chapters(book);

		let showPopover = event => {
			popoverViewService.show(event).then(option => {
				$state.go('app.verses', { 
					book: book, 
					chapter: option 
				});
			});
		}

		let vm = angular.extend(this, {
			book: book,
			chapter: chapter,
			showPopover: showPopover,
			name: bible.name(book),
			next: bible.next(book, chapter),
			prev: bible.prev(book, chapter),
			verses: bible.verses(book, chapter),
			html: text => $sce.trustAsHtml(text),
			showNumbers: state.showNumbers()
		});

		popoverViewService.create(chapters);
	}
})();