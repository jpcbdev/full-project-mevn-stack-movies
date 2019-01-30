const mongoose = require('mongoose');

const writerSchema = new mongoose.Schema({
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
    }
});
const writerModel = mongoose.model('writer', writerSchema);
module.exports = {
    writerModel,
    writerSchema
}