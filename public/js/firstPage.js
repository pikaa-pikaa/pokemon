$(function () {
	$('.name').delay(50).fadeTo(500, 1);
	$('.desc').delay(500).fadeTo(1000, 1);
	$('.login').delay(1000).fadeTo(1000, 1);

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
});
