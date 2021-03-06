const characters = [
	{ id: 1, name: 'Brock' },
	{ id: 2, name: 'Kanna' },
	{ id: 3, name: 'Ash' },
	{ id: 4, name: 'Silver' },
	{ id: 5, name: 'Serena' },
	{ id: 6, name: 'Marlon' },
	{ id: 7, name: 'Oak' },
	{ id: 8, name: 'Ace' },
	{ id: 9, name: 'Misty' },
	{ id: 10, name: 'Ethan' },
];

const rockPaperHandler = (req, res) => {
	let trainer = req.params.trainer;
	let choosenTrainer = characters.find(
		(character) => character.id === parseInt(trainer),
	);

	let randomTrainer = generateRandomTrainer();
	let randomChoosenTrainer = characters.find(
		(character) => character.id === randomTrainer,
	);

	res.render('pages/rockPaperSissiors', {
		choosenTrainer: choosenTrainer,
		randomChoosenTrainer: randomChoosenTrainer,
	});
};

function generateRandomTrainer() {
	return Math.floor(Math.random() * 10 + 1);
}

module.exports = rockPaperHandler;
