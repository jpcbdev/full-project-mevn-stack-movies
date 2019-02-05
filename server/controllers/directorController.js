const {
    directorModel
} = require('../models/directorModel');

const controller = {};

controller.getDirectors = async (req, res) => {
    await directorModel.find((error, result) => {
        if (error) {
            res.status(404).end();
        } else {
            res.json(result).end();
        }
    })
};

controller.getDirectorById = async (req, res) => {
    const id = req.params.id;
    const cond = {
        _id: id
    };
    await directorModel.findOne(cond, (error, result) => {
        if (error) {
            res.status(404).end();
        } else {
            res.json(result).end();
        }
    })
};

controller.addDirector = async (req, res) => {

    const body = req.body;
    const writer = new directorModel(body);

    await writer.save().then(() => {
        res.status(200).json({
            status: 200
        }).end();

    }).catch((error) => {
        console.log(error);
        res.status(404).end();
    });
}

controller.updateDirector = async (req, res) => {
    const id = req.params.id;
    const update = req.body;
    console.log(update);
    const cond = {
        _id: id
    };
    await directorModel.findByIdAndUpdate(cond, update, (error, result) => {
        if (error) {
            res.status(404).end();

        } else {
            res.status(200).json({
                status: 200
            }).end();
        }
    })
};

controller.deleteDirector = async (req, res) => {

    const id = req.params.id;
    const cond = {
        _id: id
    };
    await directorModel.findByIdAndDelete(cond, (error, result) => {
        if (error) {
            res.status(404).end();

        } else {
            res.status(200).json({
                status: 200
            }).end();
        }
    })
};

module.exports = controller;

// Estaba usando el modelo incorrecto