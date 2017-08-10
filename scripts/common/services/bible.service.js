(function() {
	
	'use strict';

	angular
		.module('barebone.common')
		.factory('bible', bible);

	bible.$inject = ['$window'];

	function bible($window) {

		let BIBLE = $window.bible();

		let books = () =>
			[
	            'Genesis',
	            'Exodus',
	            'Leviticus',
	            'Numbers',
	            'Deuteronomy',
	            'Joshua',
	            'Judges',
	            'Ruth',
	            '1 Samuel',
	            '2 Samuel',
	            '1 Kings',
	            '2 Kings',
	            '1 Chronicles',
	            '2 Chronicles',
	            'Ezra',
	            'Nehemiah',
	            'Esther',
	            'Job',
	            'Psalms',
	            'Proverbs',
	            'Ecclesiastes',
	            'Song of songs',
	            'Isaiah',
	            'Jeremiah',
	            'Lamentations',
	            'Ezekiel',
	            'Daniel',
	            'Hosea',
	            'Joel',
	            'Amos',
	            'Obadiah',
	            'Jonah',
	            'Micah',
	            'Nahum',
	            'Habakkuk',
	            'Zephaniah',
	            'Haggai',
	            'Zechariah',
	            'Malachi',
	            'Matthew',
	            'Mark',
	            'Luke',
	            'Yochanan',
	            'Acts',
	            'Romans',
	            '1 Corinthians',
	            '2 Corinthians',
	            'Galatians',
	            'Ephesians',
	            'Philippians',
	            'Colossians',
	            '1 Thessalonians',
	            '2 Thessalonians',
	            '1 Timothy',
	            '2 Timothy',
	            'Titus',
	            'Philemon',
	            'Hebrews',
	            'Jacob',
	            '1 Peter',
	            '2 Peter',
	            '1 Yochanan',
	            '2 Yochanan',
	            '3 Yochanan',
	            'Judah',
	            'Revelation'
	        ];

	    let name = book => books()[ book - 1 ];

		let chapters = book => Object.keys(BIBLE[ book - 1 ]);

		let verses = (book, chapter) => BIBLE[ book - 1 ][ chapter ];

		function next(book, chapter) {
			let nextbook = book;
			let nextchapter = chapter + 1;
			let totalbooks = books().length;
			let totalchapters = chapters(book).length;
			
			if(nextchapter > totalchapters) {
				
				nextbook = book + 1;

				if(nextbook > totalbooks) {
					return;
				}

				nextchapter = 1;
			}

			return { 
				book: nextbook, 
				chapter: nextchapter 
			};
		}

		function prev(book, chapter) {
			let lastbook = book;
			let lastchapter = chapter - 1;
			
			if(lastchapter <= 0) {
				
				lastbook = book - 1;
				
				if(lastbook <= 0) {
					return;
				}

				lastchapter = chapters(lastbook).length;
			}

			return { 
				book: lastbook, 
				chapter: lastchapter 
			};
		}

		return {
			books: books,
			chapters: chapters,
			verses: verses,
			name: name,
			next: next,
			prev: prev
		};
	}

})();