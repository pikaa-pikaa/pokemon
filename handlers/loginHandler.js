const superagent = require('superagent');
const Pokemon = require('./../constructors/pokemon');
const client = require('./../data/database');

var usernamedata = '';


const loginHandler = (request, response) => {
    usernamedata = '';
    var username = request.body.username;
    var password = request.body.password;
        let SQL = 'SELECT * FROM  users WHERE username=$1 AND password=$2;';
        let values = [username, password];
        // console.log(values)
        client.query(SQL,values)
        .then(results =>{
            if (results.rows.length) {
                // console.log('username existed');
                usernamedata = results.rows[0].username;
                response.render('pages/dashboard',{data:usernamedata});
            } else {
                response.send('Incorrect Username and/or Password!');

            }

        })
}

module.exports = loginHandler;
