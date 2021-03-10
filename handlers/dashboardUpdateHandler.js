const client = require('./../data/database');

const dashboardUpdateHandler = async (req, res) => {
	let loseOrWin = req.body.addCard;
	let userId = req.params.userId;

	if (loseOrWin === 'win') {
		let sqlid = `SELECT * FROM pokemons;`;
		let pokemonsIds = await client.query(sqlid);

		let ids = pokemonsIds.rows.map((id) => id.pokemon_id);

		let randomPokemon = generateRandomPokemon(ids.length);

		let sql = `SELECT * FROM pokemons WHERE pokemon_id=${ids[randomPokemon]};`;
		let pokemons = await client.query(sql);

		let sql2 = `SELECT * FROM pokemons
                INNER JOIN pokemons_users ON pokemons_users.pokemon_id = pokemons.pokemon_id
                INNER JOIN users ON users.user_id = pokemons_users.user_id
                WHERE users.user_id=${userId};`;

		let userPokemons = await client.query(sql2);

		let pokemonExist = userPokemons.rows.filter((userPokemon) => {
			return userPokemon.pokemon_id === pokemons.rows[0].pokemon_id;
		});

		while (pokemonExist.length !== 0) {
			randomPokemon = generateRandomPokemon(ids.length);
			let sql = `SELECT * FROM pokemons WHERE pokemon_id=${ids[randomPokemon]};`;
			let pokemons = await client.query(sql);

			pokemonExist = userPokemons.rows.filter((userPokemon) => {
				return userPokemon.pokemon_id === pokemons.rows[0].pokemon_id;
			});
		}

		let sqlUpdate = `INSERT INTO pokemons_users (pokemon_id, user_id) VALUES(${ids[randomPokemon]}, ${userId}) RETURNING *;`;
		let updateDashboard = await client.query(sqlUpdate);
	} else {
		res.redirect(`/dashboard/${userId}`);
	}

	res.redirect(`/dashboard/${userId}`);
};

function generateRandomPokemon(max) {
	return Math.floor(Math.random() * max);
}

module.exports = dashboardUpdateHandler;
