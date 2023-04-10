# WeloveMovies Backend

## About

This is the backend for the WeloveMovies project. It is a RESTful API built with Express and Knex. It is deployed on [render.com](https://welovemovies-thinkful-o2a6.onrender.com/)

The challenge was to build a RESTful API that allows users to search for movies, theaters, and reviews. The API also allows users to create, read, update, and delete movies, theaters, and reviews. Only the base express setup and seed data was from Thinkful. The rest of the code was written by me.

## Getting Started

### Prerequisites

- npm installed

### Installing
  
  ```bash
  npm install
  ```

have a postgres database running and create a .env file with the following variable:

  ```bash
  DATABASE_URL=postgresql://<user>:<password>@localhost/<database>
  ```

### Running the tests

  ```bash
  npm test
  ```

### Endpoints

#### Movies

| Method | Path | Description |
| ------ | ---- | ----------- |
| GET | /movies | Returns a list of all movies |
| GET | /movies/:movieId | Returns a single movie |
| GET | /movies/:movieId/theaters | Returns a list of theaters showing a movie |
| GET | /movies/:movieId/reviews | Returns a list of reviews for a movie |

#### Theaters

| Method | Path | Description |
| ------ | ---- | ----------- |
| GET | /theaters | Returns a list of all theaters |

#### Reviews

| Method | Path | Description |
| ------ | ---- | ----------- |
| PUT | /reviews/:reviewId | Updates a review |
| DELETE | /reviews/:reviewId | Deletes a review |
