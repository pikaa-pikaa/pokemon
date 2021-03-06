"use strict";

//npm packages
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const superagent = require("superagent");
const methodOverride = require("method-override");

//database file
const client = require("./data/database");

//handlers
const homeHandler = require("./handlers/homeHandler");
const dashboardHandler = require("./handlers/dashboardHandler");
const charactersHandler = require("./handlers/charactersHandler");
const rockPaperHandler = require("./handlers/rockPaperHandler");
const descriptionHandler = require("./handlers/descriptionHandler");

//app setup
const app = express();

//middlewares
app.use(cors());
app.use(methodOverride("_method"));
app.use(express.static("./public"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

//routes
app.get("/home", homeHandler);
app.get("/characters", charactersHandler);
app.get("/rockPaperSissiors/:trainer", rockPaperHandler);
app.get("/dashboard", dashboardHandler);
app.get("/description/:pokemonId", descriptionHandler);

// listen
const PORT = process.env.PORT || 3000;

client.connect().then(() => {
  app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
  });
});
