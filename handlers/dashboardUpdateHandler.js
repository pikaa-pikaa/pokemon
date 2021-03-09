const client = require('./../data/database');

const dashboardUpdateHandler = async (req, res) => {
	let loseOrWin = req.body.addCard;
	let userId = req.params.userId;

	if (loseOrWin === 'win') {
		let sql = `SELECT * FROM pokemons;`;
		let pokemons = await client.query(sql);

		let randomPokemon = generateRandomPokemon(pokemons.rows.length);

		console.log(pokemons.rows.length);

		let sql2 = `SELECT * FROM pokemons
                INNER JOIN pokemons_users ON pokemons_users.pokemon_id = pokemons.pokemon_id
                INNER JOIN users ON users.user_id = pokemons_users.user_id
                WHERE users.user_id=${userId};`;

		let userPokemons = await client.query(sql2);

		let pokemonExist = userPokemons.rows.find((userPokemon) => {
			return userPokemon.pokemon_id === randomPokemon;
		});

		while (pokemonExist) {
			randomPokemon = generateRandomPokemon(pokemons.rows.length);
			pokemonExist = userPokemons.rows.find((userPokemon) => {
				return userPokemon.pokemon_id === randomPokemon;
			});
		}

		let sqlUpdate = `INSERT INTO pokemons_users (pokemon_id, user_id) VALUES(${randomPokemon}, ${userId}) RETURNING *;`;

		let updateDashboard = await client.query(sqlUpdate);

		res.redirect(`/dashboard/${userId}`);
	} else {
		res.redirect(`/dashboard/${userId}`);
	}
};

function generateRandomPokemon(max) {
	return Math.floor(Math.random() * max + 1);
}

module.exports = dashboardUpdateHandler;
