const superagent = require('superagent');
const Pokemon = require('./../constructors/pokemon');
const client = require('./../data/database');

const signupHandler = (req, res) => {
    let errors = [];
    var username = req.body.username;
    var password = req.body.password;
    let SQL = `INSERT INTO users (username, password) VALUES ($1,$2) RETURNING user_id;`;
    let values = [username, password];
    client.query(SQL,values)
    .then(results =>{
        if (results.rows.length > 0) {
            if (password.length < 5) {
              res.send("Password must be a least 5 characters long");
            } else {
                res.redirect("/pages/dashboard");

              }
        }
    })


}


module.exports = signupHandler;
