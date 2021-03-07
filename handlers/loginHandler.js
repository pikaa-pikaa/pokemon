const client = require('./../data/database');

const loginHandler = (req, res) => {
	usernamedata = '';
	let username = req.body.username;
	let password = req.body.password;
	let SQL = 'SELECT * FROM  users WHERE username=$1 AND password=$2;';
	let values = [username, password];
	client.query(SQL, values).then((results) => {
		if (results.rows.length) {
			res.redirect(`/home/${results.rows[0].user_id}`);
		} else {
			res.send('Incorrect Username and/or Password!');
		}
	});
};

module.exports = loginHandler;
