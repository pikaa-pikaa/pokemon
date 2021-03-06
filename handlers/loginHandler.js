const client = require('./../data/database');

const loginHandler = (req, res) => {
	usernamedata = '';
	let username = req.body.username;
	let password = req.body.password;
	let SQL = 'SELECT * FROM  users WHERE username=$1 AND password=$2;';
	let values = [username, password];
	client.query(SQL, values).then((results) => {
		if (results.rows.length) {
			let usernamedata = results.rows[0].username;
			let sql2 = 'SELECT * FROM pokemons WHERE hp >= $1 ORDER BY hp LIMIT 6;';
			let value = [generateRandomHp()];
			client.query(sql2, value).then((results) => {
				res.render('pages/home', {
					data: usernamedata,
					pokemons: results.rows,
				});
			});
		} else {
			res.send('Incorrect Username and/or Password!');
		}
	});
};

function generateRandomHp() {
	return Math.floor(Math.random() * (200 - 50) + 50);
}

module.exports = loginHandler;
