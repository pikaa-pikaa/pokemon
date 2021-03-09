$(function () {
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
