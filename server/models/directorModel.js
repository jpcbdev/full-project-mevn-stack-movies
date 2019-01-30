const mongoose = require('mongoose');

const directorSchema = new mongoose.Schema({
    dni: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true
    },
    firsSurname: {
        type: String,
        require: true
    },
    birthdate: {
        type: Date,
        required: true
    },
    email: {
        type: String,
        default: "empty"
    }
});
const directorModel = mongoose.model('director', directorSchema);
module.exports = {
    directorModel,
    directorSchema
}