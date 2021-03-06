const descriptionHandler = (req, res) => {
  res.send(req.params.pokemonId);
};

module.exports = descriptionHandler;
