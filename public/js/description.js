$(function () {
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
	});

	$('.fullHp').append($('.currentHp'));
	$('.currentHp').append($('.numHp'));

	$('.numHp').animate(
		{
			width: '65',
		},
		3000,
	);
});

let i = 0;
function pop() {
	if (i == 0) {
		$('#item1').css('transform', 'translate(-130px,-16px)');
		$('#item2').css('transform', 'translate(-122px,71px)');
		$('#item3').css('transform', 'translate(-65px,135px)');
		$('#item4').css('transform', 'translate( 16px,155px)');
		i = 1;
	} else {
		$('#item1').css('transform', 'translate(0)');
		$('#item2').css('transform', 'translate(0)');
		$('#item3').css('transform', 'translate(0)');
		$('#item4').css('transform', 'translate(0)');
		i = 0;
	}
}

// console.log(a);
