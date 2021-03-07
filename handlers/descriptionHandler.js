const client = require('./../data/database');

const descriptionHandler = (req, res) => {
	let userId = req.params.userId;
	let sql = `SELECT * FROM pokemons WHERE pokemon_id=${req.params.pokemonId};`;

	client
		.query(sql)
		.then((results) => {
			res.render('./pages/description', {
				pokemonDescription: results.rows[0],
				userId,
			});
		})
		.catch((err) => {
			console.log(err);
		});
};

module.exports = descriptionHandler;
