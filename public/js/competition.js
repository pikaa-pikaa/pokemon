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
	$('.cardimg').mouseenter(function () {
		let src = $(this).attr('src');
		$('.imgHover').removeClass('hide');
		$('.imgHover').attr('src', src);
	});

	$('.cardimg').mouseleave(function () {
		$('.imgHover').addClass('hide');
	});

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

	let cardCount = 0;

	cards.forEach((card, index) => {
		card.addEventListener('click', function (e) {
			e.preventDefault();
			cardCount++;

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
			computerCards[randomArr[index]].classList.add('computerFight');
			pokemon.classList.add('userFight');

			let computerPoints = document.querySelector('.computerPoints');
			let userPoints = document.querySelector('.userPoints');

			let userHp = Number(pokemon.firstElementChild.textContent.split(' ')[36]);
			let computerHp = Number(
				computerCards[randomArr[index]].lastElementChild.textContent.split(
					' ',
				)[36],
			);

			let remaindComputerPoints = Number(
				computerPoints.textContent.split(' ')[0],
			);

			let remaindUserPoints = Number(userPoints.textContent.split(' ')[0]);

			if (userHp > computerHp) {
				computerPoints.textContent = `${
					remaindComputerPoints - (userHp - computerHp)
				} points`;
			} else {
				userPoints.textContent = `${
					remaindUserPoints - (computerHp - userHp)
				} points`;
			}

			let winOrLose = document.querySelector('.winOrLose');

			console.log(winOrLose.value);

			if (cardCount === 10) {
				if (remaindComputerPoints > remaindUserPoints) {
					winOrLose.value = 'lose';
				} else if (remaindComputerPoints < remaindUserPoints) {
					winOrLose.value = 'win';
				} else {
					winOrLose.value = 'draw';
				}
			}
		});
	});

	//end of card
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

function generateRandomIndex() {
	return Math.floor(Math.random() * 20);
}
