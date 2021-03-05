DROP TABLE IF EXISTS pokemons;

CREATE TABLE pokemons (
  pokemon_id SERIAL PRIMARY KEY,
  name VARCHAR(255) UNIQUE,
  description TEXT,
  level VARCHAR(255),
  hp INT,
  type TEXT,
  abilities TEXT,
  image TEXT,
  attack TEXT,
  defence TEXT,
  weaknesses TEXT,
  evolves_from TEXT,
  evolves_to TEXT
);



DROP TABLE IF EXISTS users;

CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  username VARCHAR(255) NOT NULL UNIQUE,
  password  VARCHAR(255) NOT NULL
);


DROP TABLE IF EXISTS pokemons_users;

CREATE TABLE pokemons_users (
  pokemon_id INT REFERENCES pokemons (pokemon_id),
  user_id INT REFERENCES users (user_id),
  PRIMARY KEY (pokemon_id, user_id)
);
