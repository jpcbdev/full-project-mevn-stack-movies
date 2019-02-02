const controller = {};
const {
    genderModel
} = require('../models/genderModel');

controller.getGenders = async (req, res) => {
    await genderModel.find((error, result) => {
        if (error) {
            // console.log(error);
            res.json(error);
        } else {
            // console.log(result);
            res.json(result);
        }
    });
}
controller.getGenderById = async (req, res) => {
    const id = req.params.id;
    const cond = {
        _id: id
    };
    await genderModel.findOne(cond, (error, result) => {
        if (error || result === null) {
            res.status(404).end();
        } else {
            res.json(result).end();
        }
    });
}
controller.addGender = async (req, res) => {
    const body = req.body;
    const gender = new genderModel(body);
    await gender.save()
        .then((result) => {
            res.status(200).json({
                status: 200
            }).end();
        })
        .catch((error) => {
            res.status(404).end();
        })
}
controller.updateGender = async (req, res) => {
    const id = req.params.id;
    const cond = {
        _id: id
    };
    const update = req.body;
    await genderModel.findByIdAndUpdate(cond, update, (error, result) => {
        if (error || result === null) {
            res.status(404).end();
        } else {
            res.status(200).json({
                status: 200
            }).end();
        }
    });

}
controller.deleteGender = async (req, res) => {
    const id = req.params.id;
    const cond = {
        _id: id
    };
    await genderModel.findByIdAndDelete(cond, (error, result) => {
        if (error || result === null) {
            res.status(404).end();
        } else {
            res.status(200).json({
                status: 200
            }).end();
        }
    });

}

module.exports = controller;