const client = require("./../data/database");

const descriptionHandler = (req, res) => {
  let sql = `SELECT * FROM pokemons WHERE pokemon_id=${req.params.pokemonId};`;

  client
    .query(sql)
    .then((results) => {
      // res.send(results.rows[0]);
      res.render("./pages/description", {
        pokemonDescription: results.rows[0],
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = descriptionHandler;
