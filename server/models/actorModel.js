const mongoose = require('mongoose');

let actorSchema = new mongoose.Schema({
    dni: {
        type: String,
        required: false,
        default: null
    },
    firstName: {
        type: String,
        required: true
    },
    firstSurname: {
        type: String,
        required: true
    },
    birthdate: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: false,
        default: null
    },
    photo: {
        type: String,
        required: false,
        default: 'https://wingslax.com/wp-content/uploads/2017/12/no-image-available.png'
    }
});
const actorModel = mongoose.model('actor', actorSchema);
module.exports = {
    actorModel,
    actorSchema
};