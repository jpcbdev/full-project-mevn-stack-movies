const {
    writerModel
} = require('../models/writerModel.js');

const controller = {};

controller.getWriters = async (req, res) => {
    await writerModel.find((error, result) => {
        if (error) res.status(404).end();
        else res.status(200).json(result).end();
    })
}
controller.getWriterById = async (req, res) => {
    const id = req.params.id;
    const cond = {
        _id: id
    };
    await writerModel.findOne(cond, (error, result) => {
        if (error) res.status(404).end();
        else res.json(result).end();
    });

}
controller.addWriter = async (req, res) => {
    const body = req.body;
    const writer = new writerModel(body);
    await writer.save().then(() => {
        res.json({
            status: 200
        }).end();
    }).catch(error => {
        res.json({
            status: 400
        }).end();
    })
}
controller.updateWriter = async (req, res) => {
    const id = req.params.id;
    const update = req.body;
    const cond = {
        _id: id
    };
    await writerModel.findOneAndUpdate(cond, update, (error, result) => {
        if (error) {
            res.status(404).end();

        } else {
            res.status(200).json({
                status: 200
            }).end();
        }
    })
}
controller.deleteWriter = async (req, res) => {
    const id = req.params.id;
    const cond = {
        _id: id
    };
    await writerModel.findOneAndDelete(cond, (error, result) => {
        if (error) {
            res.status(404).end();

        } else {
            res.status(200).json({
                status: 200
            }).end();
        }
    })
}

module.exports = controller;