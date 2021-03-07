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
	let userId = req.params.userId;
	let trainer = req.params.trainer;
	let choosenTrainer = characters.find(
		(character) => character.id === parseInt(trainer),
	);

	let randomTrainer = generateRandomTrainer();

	while (randomTrainer === parseInt(trainer)) {
		randomTrainer = generateRandomTrainer();
	}

	let randomChoosenTrainer = characters.find(
		(character) => character.id === randomTrainer,
	);

	let first = generateRandomTurn();

	res.render('pages/rockPaperSissiors', {
		choosenTrainer: { turn: 1, choosenTrainer },
		randomChoosenTrainer: { turn: 2, randomChoosenTrainer },
		first,
		userId,
	});
};

function generateRandomTrainer() {
	return Math.floor(Math.random() * 10 + 1);
}

function generateRandomTurn() {
	return Math.floor(Math.random() * 2 + 1);
}

module.exports = rockPaperHandler;
