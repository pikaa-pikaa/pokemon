require('dotenv').config();
const pg = require('pg');

//database setup locally
const client = new pg.Client(process.env.DATABASE_URL);

// database setup for heroku
// const client = new pg.Client({
// 	connectionString: process.env.DATABASE_URL,
// 	ssl: { rejectUnauthorized: false },
// });

module.exports = client;
