const superagent = require('superagent');
const Pokemon = require('./../constructors/pokemon');
const client = require('./../data/database');

const signUpHandler = (req, res) => {
	let username = req.body.username;
	let password = req.body.password;

	addPokemonsFromApi();

	let SQL = `INSERT INTO users (username, password) VALUES ($1,$2) RETURNING user_id;`;
	let values = [username, password];
	client.query(SQL, values).then((results) => {
		if (results.rows.length > 0) {
			if (password.length < 5) {
				res.send('Password must be a least 5 characters long');
			} else {
				addedPokemonForUser(results.rows[0].user_id);
				res.render('pages/login');
			}
		}
	});
};

function addedPokemonForUser(userId) {
	let sql = `SELECT pokemon_id FROM pokemons ORDER BY pokemon_id LIMIT 20;`;
	return client.query(sql).then((results) => {
		results.rows.forEach((id) => {
			let SQL = `INSERT INTO pokemons_users (pokemon_id, user_id) VALUES ($1,$2) RETURNING *;`;
			let values = [id.pokemon_id, userId];
			return client.query(SQL, values).then((results) => {});
		});
	});
}

function addPokemonsFromApi() {
	let page = generateRandomPage();
	let url = `https://api.pokemontcg.io/v2/cards?page=${page}`;
	return superagent.get(url).then((results) => {
		let { data } = results.body;
		let pokemons = data
			.filter((item) => {
				return item.supertype === 'Pokémon';
			})
			.map((pokemon) => {
				return new Pokemon(pokemon);
			});

		pokemons.forEach((pokemon) => {
			let {
				name,
				description,
				level,
				hp,
				types,
				abilities,
				image,
				attacks,
				defence,
				weaknesses,
				evolvesFrom,
				evolvesTo,
			} = pokemon;

			let sql = `INSERT INTO pokemons (name, description, level, hp, type, abilities, image, attack, defence, weaknesses, evolves_from, evolves_to) 
							   VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) ON CONFLICT (name) DO NOTHING RETURNING *;`;
			let safeValues = [
				name,
				description,
				level,
				hp,
				types,
				abilities,
				image,
				attacks,
				defence,
				weaknesses,
				evolvesFrom,
				evolvesTo,
			];

			return client
				.query(sql, safeValues)
				.then((results) => {})
				.catch((err) => {
					console.log(err);
				});
		});
	});
}

function generateRandomPage() {
	return Math.floor(Math.random() * 42 + 1);
}

module.exports = signUpHandler;
