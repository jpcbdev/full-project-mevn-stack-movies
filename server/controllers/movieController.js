const {
    movieModel
} = require('../models/movieModel.js');
const controller = {};

controller.getMovies = async (req, res) => {
    await movieModel.find({}, (error, result) => {
        if (error) res.status(404).end();
        else res.status(200).json(result).end();
    })
};
controller.getMovieById = async (req, res) => {
    const id = req.params.id;
    await movieModel.findById({
        _id: id
    }, (error, result) => {
        if (error) res.status(404).end();
        else res.json(result).end();
    })
}
controller.addMovie = async (req, res) => {

    const body = req.body;
    console.log(body);

    
    const movie = new movieModel(body);

    await movie.save().then(() => {
        res.json({
            status: 200
        }).end();
    }).catch(error => {
        res.json({
            status: 400
        }).end();
    })
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
        (error, result) => {
            if (error) {
                res.status(404).end();

            } else {
                res.status(200).json({
                    status: 200
                }).end();
            }
        })

    // Habia colocado el guion bajo del id del lado derecho lo que hacia que no encontrara el data a actualizar
}
controller.deleteMovie = async (req, res) => {
    const id = req.params.id;
    await movieModel.findByIdAndDelete({
        _id: id
    }, (error, result) => {
        if (error) {
            res.status(404).end();

        } else {
            res.status(200).json({
                status: 200
            }).end();
        }
    });

}
module.exports = controller;