const client = require('./../data/database');

const homeHandler = (req, res) => {
	let userId = req.params.userId;
	let sql2 = `SELECT * FROM users WHERE user_id = ${userId};`;
	client.query(sql2).then((results) => {
		featuredPokemon(res, results.rows[0]);
	});
};

function generateRandomHp() {
	return Math.floor(Math.random() * (200 - 50) + 50);
}

function featuredPokemon(res, user) {
	let sql2 = 'SELECT * FROM pokemons WHERE hp >= $1 ORDER BY hp LIMIT 6;';
	let value = [generateRandomHp()];
	client.query(sql2, value).then((results) => {
		res.render('pages/home', { pokemons: results.rows, user });
	});
}

module.exports = homeHandler;
