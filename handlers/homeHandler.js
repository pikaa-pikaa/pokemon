const client = require('./../data/database');

const homeHandler = (req, res) => {
	let userId = req.params.userId;
	let sql2 = `SELECT * FROM users WHERE user_id = ${userId};`;
	client.query(sql2).then((results) => {
		res.render('pages/home', { user: results.rows[0] });
	});
};

module.exports = homeHandler;
