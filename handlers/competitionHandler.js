const client = require('./../data/database');

const competitionHandler = async (req, res) => {
	let userId = req.params.userId;

	let sqlComputer = `SELECT * FROM pokemons OFFSET ${generateRandomRow()} ROWS FETCH FIRST 20 ROW ONLY;`;

	let userCards = [];
	let computerCards = [];

	for (let index = 0; index < 20; index++) {
		let sqlUser = `SELECT * FROM pokemons
					INNER JOIN pokemons_users ON pokemons_users.pokemon_id = pokemons.pokemon_id
					INNER JOIN users ON users.user_id = pokemons_users.user_id
					WHERE users.user_id=${userId};`;

		let cards = await client.query(sqlUser);
		if (cards.rows.length > 20) {
			let offset = generateRandomUserCards(cards.rows.length);

			while (card.rows.length - offset < 20) {
				offset = generateRandomUserCards(cards.rows.length);
			}

			let sqlUser = `SELECT * FROM pokemons
					INNER JOIN pokemons_users ON pokemons_users.pokemon_id = pokemons.pokemon_id
					INNER JOIN users ON users.user_id = pokemons_users.user_id
					WHERE users.user_id=${userId} OFFSET ${generateRandomUserCards()} ROWS FETCH FIRST 20 ROW ONLY;`;

			let cards2 = await client.query(sqlUser);
			userCards.push(cards2.rows[index]);
		} else {
			userCards.push(cards.rows[index]);
		}
	}

	client.query(sqlComputer).then((results) => {
		computerCards = [...results.rows];
		res.render('pages/competition', { userId, computerCards, userCards });
	});

	// res.render('pages/competition', { userId, computerCards, userCards });
};

function generateRandomRow() {
	return Math.floor(Math.random() * 700 + 1);
}

function generateRandomUserCards(max) {
	return Math.floor(Math.random() * max + 1);
}

module.exports = competitionHandler;
