'use strict';

//libraries
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const superagent = require('superagent');
const pg = require('pg');
const methodOverride = require('method-override');

//app setup
const app = express();

//middlewares
app.use(cors());
app.use(methodOverride('_method'));
app.use(express.static('./public'));
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

//database setup locally
const client = new pg.Client(process.env.DATABASE_URL);

//database setup for heroku
// const client = new pg.Client({
// 	connectionString: process.env.DATABASE_URL,
// 	ssl: { rejectUnauthorized: false },
// });

//constructor
function Pokemon(data) {
	this.name = data;
	this.description = data;
	this.level = data;
	this.hp = data;
	this.type = data;
	this.abilities = data;
	this.image = data;
	this.attack = data;
	this.defence = data;
	this.weaknesses = data;
	this.evolvesFrom = data;
	this.evolvesTo = data;
}

// listen
const PORT = process.env.PORT || 3000;

client.connect().then(() => {
	app.listen(PORT, () => {
		console.log(`http://localhost:${PORT}`);
	});
});
