const client = require('./../data/database');

const competitionHandler = async (req, res) => {
	let userId = req.params.userId;

	let userCards;

	let userSql = `SELECT * FROM users WHERE user_id = ${userId};`;

	let user = await client.query(userSql);

	let sqlComputer = `SELECT * FROM pokemons OFFSET ${generateRandomRow()} ROWS FETCH FIRST 20 ROW ONLY;`;

	let sqlUser = `SELECT * FROM pokemons
					INNER JOIN pokemons_users ON pokemons_users.pokemon_id = pokemons.pokemon_id
					INNER JOIN users ON users.user_id = pokemons_users.user_id
					WHERE users.user_id=${userId} ORDER BY pokemons.hp DESC LIMIT 20;`;

	userCards = await client.query(sqlUser);

	client.query(sqlComputer).then((results) => {
		if (results.rows.length === 0) {
			let offset = generateRandomRow();

			while (results.rows.length === 0) {
				offset = generateRandomRow();
			}

			// let sqlUser = `SELECT * FROM pokemons
			// 	INNER JOIN pokemons_users ON pokemons_users.pokemon_id = pokemons.pokemon_id
			// 	INNER JOIN users ON users.user_id = pokemons_users.user_id
			// 	WHERE users.user_id=${userId} OFFSET ${offset} ROWS FETCH FIRST 20 ROW ONLY;`;

			let sqlComputer = `SELECT * FROM pokemons OFFSET ${offset} ROWS FETCH FIRST 20 ROW ONLY;`;

			client.query(sqlComputer).then((results) => {
				res.render('pages/competition', {
					user: user.rows[0],
					computerCards: results.rows,
					userCards: userCards.rows,
				});
			});
		} else {
			client.query(sqlComputer).then((results) => {
				res.render('pages/competition', {
					user: user.rows[0],
					computerCards: results.rows,
					userCards: userCards.rows,
				});
			});
		}
	});
};

function generateRandomRow() {
	return Math.floor(Math.random() * 200 + 1);
}

module.exports = competitionHandler;
