const client = require('./../data/database');

const signUpHandler = (req, res) => {
	let username = req.body.username;
	let password = req.body.password;

	let SQL = `INSERT INTO users (username, password) VALUES ($1,$2) RETURNING user_id;`;
	let values = [username, password];
	client.query(SQL, values).then((results) => {
		if (results.rows.length > 0) {
			addedPokemonForUser(results.rows[0].user_id);
			res.redirect('/login');
		}
	});
};

function addedPokemonForUser(userId) {
	let sql = `SELECT pokemon_id FROM pokemons ORDER BY pokemon_id LIMIT 20;`;
	return client.query(sql).then((results) => {
		results.rows.forEach((id) => {
			let SQL = `INSERT INTO pokemons_users (pokemon_id, user_id) VALUES ($1,$2) RETURNING *;`;
			let values = [id.pokemon_id, userId];
			client.query(SQL, values).then((results) => {});
		});
	});
}

module.exports = signUpHandler;
