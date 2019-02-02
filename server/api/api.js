const Router = require('express').Router();
Router
    // Actors
    .get('/actors', require('../controllers/actorController').getActors)
    .get('/actors/:id', require('../controllers/actorController').getActorById)
    .post('/actors', require('../controllers/actorController').addActor)
    .put('/actors/:id', require('../controllers/actorController').updateActor)
    .delete('/actors/:id', require('../controllers/actorController').deleteActor)
    // Genders
    .get('/genders', require('../controllers/genderController').getGenders)
    .get('/genders/:id', require('../controllers/genderController').getGenderById)
    .post('/genders', require('../controllers/genderController').addGender)
    .put('/genders/:id', require('../controllers/genderController').updateGender)
    .delete('/genders/:id', require('../controllers/genderController').deleteGender)
    // Movies
    .get('/movies', require('../controllers/movieController.js').getMovies)
    .get('/movies/:id', require('../controllers/movieController.js').getMovieById)
    .post('/movies', require('../controllers/movieController.js').addMovie)
    .put('/movies/:id', require('../controllers/movieController.js').updateMovie)
    .delete('/movies/:id', require('../controllers/movieController.js').deleteMovie)

module.exports = Router;