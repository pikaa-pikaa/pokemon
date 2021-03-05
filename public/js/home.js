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
	$('.navBarsClose').on('click', function () {
		$('.navBarsOpen').removeClass('hide');
		$('.nav').removeClass('hide');
		$('.navBarsClose').addClass('hide');
	});

	$('.navBarsOpen').on('click', function () {
		$('.navBarsOpen').addClass('hide');
		$('.nav').addClass('hide');
		$('.navBarsClose').removeClass('hide');
	});

	//end navbar
});
