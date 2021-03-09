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

	$('.aya1').hover(
		() => {
			$('.aya1 .info').fadeTo(1000, 1);
			$('.aya').fadeTo(400, 0.2);
		},
		() => {
			$('.aya1 .info').fadeTo(0, 0);
			$('.aya').fadeTo(500, 1);
		},
	);

	$('.lina1').hover(
		() => {
			$('.lina1 .info').fadeTo(500, 1);
			$('.lina').fadeTo(400, 0.2);
		},
		() => {
			$('.lina1 .info').fadeTo(0, 0);
			$('.lina').fadeTo(500, 1);
		},
	);

	$('.malek1').hover(
		() => {
			$('.malek1 .info').fadeTo(500, 1);
			$('.malek').fadeTo(400, 0.2);
		},
		() => {
			$('.malek1 .info').fadeTo(0, 0);
			$('.malek').fadeTo(500, 1);
		},
	);

	$('.mohammed1').hover(
		() => {
			$('.mohammed1 .info').fadeTo(1000, 1);
			$('.mohammed').fadeTo(400, 0.2);
		},
		() => {
			$('.mohammed1 .info').fadeTo(0, 0);
			$('.mohammed').fadeTo(500, 1);
		},
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
