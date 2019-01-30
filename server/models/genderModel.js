const mongoose = require('mongoose');

const genderSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

const genderModel = mongoose.model('gender', genderSchema);
module.exports = {
    genderModel,
    genderSchema
};