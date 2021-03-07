const client = require('./../data/database');

const competitionHandler = (req, res) => {
	let userId = req.params.userId;
	res.render('pages/competition', { userId });
};

module.exports = competitionHandler;
