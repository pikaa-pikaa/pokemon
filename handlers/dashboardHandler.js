const client = require('./../data/database');

const dashboardHandler = (req, res) => {
	let userId = req.params.userId;
	let sql = `SELECT * FROM pokemons
                INNER JOIN pokemons_users ON pokemons_users.pokemon_id = pokemons.pokemon_id
                INNER JOIN users ON users.user_id = pokemons_users.user_id
                WHERE users.user_id=${userId};`;

	client
		.query(sql)
		.then((results) => {
			let sql2 = `SELECT * FROM users WHERE user_id=${userId};`;
			client.query(sql2).then((result) => {
				res.render('./pages/dashboard', {
					pokemons: results.rows,
					user: result.rows[0],
				});
			});
		})
		.catch((err) => {
			console.log(err);
		});
};

module.exports = dashboardHandler;
