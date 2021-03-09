const client = require('./../data/database');

const descriptionHome = (req, res) => {
	let sql = `SELECT * FROM pokemons WHERE pokemon_id=${req.params.pokemonId};`;

	client
		.query(sql)
		.then((results) => {
			res.render('./pages/descriptionHome', {
				pokemonDescription: results.rows[0],
			});
		})
		.catch((err) => {
			console.log(err);
		});
};

module.exports = descriptionHome;
