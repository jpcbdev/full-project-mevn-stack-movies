const {
    actorModel
} = require('../models/actorModel');
const controller = {};

controller.getActors = async (req, res) => {
    await actorModel.find({}, (error, result) => {
        if (error || result === null) {
            res.status(404).end();
        } else {
            res.json(result).end();
        }
    })

}
controller.getActorById = async (req, res) => {
    const id = req.params.id;
    const cond = {
        _id: id
    };
    actorModel.findOne(cond, (error, result) => {
        if (error || result === null) {
            res.status(404).end();
        } else {
            res.json(result).end();
        }
    })
}
controller.addActor = async (req, res) => {
    const body = req.body;
    const actor = new actorModel(body);
    await actor.save().then(() => {

        res.status(200).json({
            status: 200
        }).end();

    }).catch((error) => {
        console.log(error);
        res.status(404).end();
    });
}
controller.updateActor = async (req, res) => {
    const cond = {
        _id: req.params.id
    }
    const update = req.body;

    await actorModel.findOneAndUpdate(cond, update, {
        new: true,
    }, (error, result) => {
        if (error || result === null) {
            // console.log(error);
            res.status(404).end();
        } else {
            // console.log(result);
            res.status(200).json({
                status: 200
            }).end();
        }
    });
}
controller.deleteActor = async (req, res) => {
    const id = req.params.id;
    const cond = {
        _id: id
    };
    await actorModel.findByIdAndRemove(cond, (error, result) => {
        if (error) {
            // (error || result === null)
            console.log(error);
            res.status(404).end();

        } else {
            res.status(200).json({
                status: 200
            }).end();
        }
    })
}

module.exports = controller;