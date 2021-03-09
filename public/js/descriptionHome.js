$(function () {
	$('.fullHp').append($('.currentHp'));
	$('.currentHp').append($('.numHp'));

	$('.numHp').animate(
		{
			width: '65',
		},
		3000,
	);
});
