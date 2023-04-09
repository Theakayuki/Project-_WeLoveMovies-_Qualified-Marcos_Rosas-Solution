if (process.env.USER) require("dotenv").config();
const express = require("express");
const noRouteExists = require("./errors/noRouteExists");
const app = express();
const moviesRouter = require("./movies/movies.router");

app.use(express.json());

app.use("/movies", moviesRouter);

app.use(noRouteExists);

module.exports = app;
