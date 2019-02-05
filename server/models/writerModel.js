const mongoose = require('mongoose');

const writerSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    firstSurname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: false
    },
    photo: {
        type: String,
        required: false,
        default: 'https://wingslax.com/wp-content/uploads/2017/12/no-image-available.png'
    }
});
const writerModel = mongoose.model('writer', writerSchema);
module.exports = {
    writerModel,
    writerSchema
}