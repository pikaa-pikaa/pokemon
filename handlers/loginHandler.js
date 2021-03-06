const client = require('./../data/database');

const loginHandler = (req, res) => {

    usernamedata = '';
    var username = req.body.username;
    var password = req.body.password;
        let SQL = 'SELECT * FROM  users WHERE username=$1 AND password=$2;';
        let values = [username, password];
        // console.log(values)
        client.query(SQL,values)
        .then(results =>{
            if (results.rows.length) {
                // console.log('username existed');
                usernamedata = results.rows[0].username;
                res.render('pages/home',{data:usernamedata});
            } else {
                res.send('Incorrect Username and/or Password!');

            }

        })
};

module.exports = loginHandler;
