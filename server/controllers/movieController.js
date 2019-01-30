const movieModel = require('../models/movieModel.js');
const controller = {};

controller.getMovies = async (req, res) => {
    await movieModel.find({}, (error, movies) => {
        if (error) {
            console.log(error)
        } else {
            res.json(movies);
        }
    })
};
controller.getMovieById = async (req, res) => {
    const id = req.params.id;
    await movieModel.findById({
        _id: id
    }, (error, movie) => {
        if (error) {
            res.json(error)
        } else(res.json(movie));
    })
}
controller.addMovie = async (req, res) => {

    const body = req.body;
    let Movie = new movieModel(body)
    await Movie.save().then((movies) => {
        res.json(movies)
    }).catch((error) => {
        res.json(error);
    });
}
controller.updateMovie = async (req, res) => {

    const id = req.params.id;
    const body = req.body;

    await movieModel.findByIdAndUpdate({
            _id: id
        },
        body, {
            new: true
        },
        (error, movie) => {
            if (error) {
                res.json(error)
            } else {
                res.json(movie)
            }
        })

    // Habia colocado el guion bajo del id del lado derecho lo que hacia que no encontrara el data a actualizar
}
controller.deleteMovie = async (req, res) => {
    const id = req.params.id;
    await movieModel.findByIdAndDelete({
        _id: id
    }, (error, movie) => {
        if (error) {
            res.json(error)
        } else {
            res.json(movie)
        }
    });

}
module.exports = controller;