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

	//card
	let cards = document.querySelectorAll('.cards .card');
	let computerCards = document.querySelectorAll('.computerCards .computerCard');
	let randomArr = [];
	let random = generateRandomIndex();
	for (let index = 0; index < 20; index++) {
		while (randomArr.includes(random)) {
			random = generateRandomIndex();
		}
		randomArr.push(random);
	}

	cards.forEach((card, index) => {
		card.addEventListener('click', function (e) {
			e.preventDefault();
			let userFights = document.querySelectorAll('.userFight');
			let computerFights = document.querySelectorAll('.computerFight');

			if (userFights.length) {
				userFights.forEach((userFight) => {
					userFight.classList.add('hide');
					userFight.classList.remove('userFight');
				});

				computerFights.forEach((computerFight) => {
					computerFight.classList.add('hide');
					computerFight.classList.remove('computerFight');
				});
			}

			let pokemon = e.currentTarget;
			pokemon.classList.add('userFight');
			computerCards[randomArr[index]].classList.add('computerFight');
		});
	});

	//end of card
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

function generateRandomIndex() {
	return Math.floor(Math.random() * 20);
}

