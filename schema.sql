DROP TABLE IF EXISTS pokemons;

CREATE TABLE pokemons (
  pokemon_id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  description TEXT,
  level VARCHAR(255),
  hp VARCHAR(255),
  type VARCHAR(255),
  abilities VARCHAR(255),
  image VARCHAR(255),
  attack VARCHAR(255),
  defence VARCHAR(255),
  weaknesses VARCHAR(255),
  evolves_from VARCHAR(255),
  evolves_to VARCHAR(255)
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
