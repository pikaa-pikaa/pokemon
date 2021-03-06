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
});
