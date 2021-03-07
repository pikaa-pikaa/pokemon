const charactersHandler = (req, res) => {
	let userId = req.params.userId;
	res.render('pages/characters', { userId });
};

module.exports = charactersHandler;
