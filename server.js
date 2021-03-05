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

//routes
app.get('/', (req, res) => {
	let url = 'https://api.pokemontcg.io/v2/cards?page=1&pageSize=20';
	superagent.get(url).then((results) => {
		let { data } = results.body;
		let pokemons = data.map((item) => {
			return new Pokemon(item);
		});
		res.send(pokemons);
	});
});

//constructor
function Pokemon(data) {
	this.name = data.name;
	this.description = data.flavorText
		? data.flavorText
		: 'No description for this Pokemon becuase it is rare';
	this.level = data.level;
	this.hp = data.hp;
	this.types = data.types;
	this.abilities = data.abilities
		? data.abilities.map((ability) => ability.name)
		: 'There are no abilities for this pokemon';
	this.image = data.images.large || data.images.small;
	this.attacks = data.attacks
		? data.attacks.map((attack) => attack.name)
		: 'This pokemon has no attacks abilities';
	this.defence = data.resistances
		? data.resistances.map((resistance) => resistance.type)
		: 'This pokemon has no defences abilities';
	this.weaknesses = data.weaknesses
		? data.weaknesses.map((weakness) => weakness.type)
		: 'This pokemon has no weaknesses';
	this.evolvesFrom = data.evolvesFrom
		? data.evolvesFrom
		: 'First Version of This kind';
	this.evolvesTo = data.evolvesTo
		? data.evolvesTo
		: 'Last Version of This kind';
}

// listen
const PORT = process.env.PORT || 3000;

client.connect().then(() => {
	app.listen(PORT, () => {
		console.log(`http://localhost:${PORT}`);
	});
});
