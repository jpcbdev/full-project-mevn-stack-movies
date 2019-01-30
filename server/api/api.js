const Router = require('express').Router();
Router
    .get('/actors', require('../controllers/actorController').getActors)
    .get('/actors/:id', require('../controllers/actorController').getActorById)
    .post('/actors', require('../controllers/actorController').addActor)
    .put('/actors/:id', require('../controllers/actorController').updateActor)
    .delete('/actors/:id', require('../controllers/actorController').deleteActor)
    .get('/movies', require('../controllers/movieController.js').getMovies)
    .get('/movies/:id', require('../controllers/movieController.js').getMovieById)
    .post('/movies', require('../controllers/movieController.js').addMovie)
    .put('/movies/:id', require('../controllers/movieController.js').updateMovie)
    .delete('/movies/:id', require('../controllers/movieController.js').deleteMovie)

module.exports = Router;