const client = require('./../data/database');

const competitionHandler = (req, res) => {
	res.render('pages/competition');
};

module.exports = competitionHandler;
