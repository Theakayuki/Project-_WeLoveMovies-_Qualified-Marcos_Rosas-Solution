if (process.env.USER) require("dotenv").config();
const express = require("express");
const noRouteExists = require("./errors/noRouteExists");
const app = express();

const moviesRouter = require("./movies/movies.router");
const reviewsRouter = require("./reviews/reviews.router");
const theatersRouter = require("./theaters/theaters.router");

const errorHandler = require("./errors/errorHandler");

app.use(express.json());

app.use("/movies", moviesRouter);
app.use("/reviews", reviewsRouter);
app.use("/theaters", theatersRouter);

app.use(noRouteExists);
app.use(errorHandler);

module.exports = app;
