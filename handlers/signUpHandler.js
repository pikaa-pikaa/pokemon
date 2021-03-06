const client = require('./../data/database');

const signUpHandler = (req, res) => {
	let username = req.body.username;
	let password = req.body.password;
	let SQL = `INSERT INTO users (username, password) VALUES ($1,$2) RETURNING user_id;`;
	let values = [username, password];
	client.query(SQL, values).then((results) => {
		if (results.rows.length > 0) {
			if (password.length < 5) {
				res.send('Password must be a least 5 characters long');
			} else {
				for (let index = 1; index <= 20; index++) {
					let SQL = `INSERT INTO pokemons_users (pokemon_id, user_id) VALUES ($1,$2) RETURNING *;`;
					let values = [index, results.rows[0].user_id];
					client.query(SQL, values).then((results) => {
						console.log(results.rows);
					});
				}
				res.render('pages/login');
			}
		}
	});
};

module.exports = signUpHandler;
