$(function () {
	//navbar
	$('.navBarsClose').on('click', function () {
		$('.navBarsClose').stop().hide();
		$('.navBarsOpen').stop().fadeIn();
		$('.navbar').stop().delay(1000).show();
		$('.links').stop().delay(2000).show();
	});

	$('.navBarsOpen').on('click', function () {
		$('.navBarsOpen').stop().hide();
		$('.navbar').stop().hide();
		$('.links').stop().hide();
		$('.navBarsClose').stop().delay(500).show();
	});

	//end navbar

	//hi

	$('.hi').stop().delay(500).fadeTo(2000, 1 );
	$('.hello').stop().delay(1000).fadeTo(2000, 1);

	//end hi

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
