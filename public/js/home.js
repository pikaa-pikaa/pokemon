$(function () {
	//card slider
	$('.right').on('click', function () {
		let currentCard = $('.active');
		let nextCard = currentCard.next();

		if (nextCard.length) {
			currentCard.removeClass('active').addClass('hold');
			nextCard.addClass('active').removeClass('hold');
		}
	});

	$('.left').on('click', function () {
		let currentCard = $('.active');
		let prevCard = currentCard.prev();
		if (prevCard.length) {
			currentCard.removeClass('active').addClass('hold');
			prevCard.addClass('active').removeClass('hold');
		}
	});

	//end of card slider

	//navbar

	//end navbar
});
