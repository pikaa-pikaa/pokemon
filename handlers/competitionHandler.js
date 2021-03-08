const client = require('./../data/database');

const competitionHandler = async (req, res) => {
	let userId = req.params.userId;

	let sqlComputer = `SELECT * FROM pokemons OFFSET ${generateRandomRow()} ROWS FETCH FIRST 20 ROW ONLY;`;

	let userSql = `SELECT * FROM users WHERE user_id = ${userId};`;

	let user = await client.query(userSql);

	let userCards;
	let computerCards = [];

	// for (let index = 0; index < 20; index++) {
	let sqlUser = `SELECT * FROM pokemons
					INNER JOIN pokemons_users ON pokemons_users.pokemon_id = pokemons.pokemon_id
					INNER JOIN users ON users.user_id = pokemons_users.user_id
					WHERE users.user_id=${userId} ORDER BY pokemons.hp DESC LIMIT 20;`;

	userCards = await client.query(sqlUser);

	// if (userCards.rows.length > 20) {
	// 	let offset = generateRandomUserCards(userCards.rows.length);

	// 	while (userCards.rows.length - offset < 20) {
	// 		offset = generateRandomUserCards(userCards.rows.length);
	// 	}

	// 	let sqlUser = `SELECT * FROM pokemons
	// 			INNER JOIN pokemons_users ON pokemons_users.pokemon_id = pokemons.pokemon_id
	// 			INNER JOIN users ON users.user_id = pokemons_users.user_id
	// 			WHERE users.user_id=${userId} OFFSET ${offset} ROWS FETCH FIRST 20 ROW ONLY;`;

	// 	userCards = await client.query(sqlUser);
	// } else {
	// 	userCards = await client.query(sqlUser);
	// }
	// }

	client.query(sqlComputer).then((results) => {
		computerCards = [...results.rows];
		res.render('pages/competition', {
			user: user.rows[0],
			computerCards,
			userCards: userCards.rows,
		});
	});
};

function generateRandomRow() {
	return Math.floor(Math.random() * 700 + 1);
}

// function generateRandomUserCards(max) {
// 	return Math.floor(Math.random() * max + 1);
// }

module.exports = competitionHandler;
