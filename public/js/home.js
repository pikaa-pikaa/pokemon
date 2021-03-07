$(function () {
	//navbar

	$('.navBarsClose').on('click', function () {
		$('.navBarsOpen').removeClass('hide');
		$('.navBarsClose').addClass('hide');
	});

	$('.navBarsOpen').on('click', function () {
		$('.navBarsOpen').addClass('hide');
		$('.navBarsClose').removeClass('hide');
	});

	$('.navBarsClose').on('click', pop());

	$('.navBarsOpen').on('click', pop());

	//end navbar

	//hi

	$('.hi').stop().delay(500).fadeTo(2000, 1);
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

let i = 0;
function pop() {
	if (i == 0) {
		$('#item1').css('transform', 'translate(-130px,-13px)');
		$('#item2').css('transform', 'translate(-122px,71px)');
		$('#item3').css('transform', 'translate(-72px,142px)');
		$('#item4').css('transform', 'translate( 15px,155px)');
		i = 1;
	} else {
		$('#item1').css('transform', 'translate(0)');
		$('#item2').css('transform', 'translate(0)');
		$('#item3').css('transform', 'translate(0)');
		$('#item4').css('transform', 'translate(0)');
		i = 0;
	}
}
