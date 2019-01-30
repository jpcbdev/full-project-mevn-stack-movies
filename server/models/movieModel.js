const mongoose = require('mongoose');

// <== Start Schemas
const {
    actorSchema
} = require('./actorModel');
const {
    directorSchema
} = require('./directorModel');

const {
    genderSchema
} = require('./genderModel');

const {
    writerSchema
} = require('./writerModel')
// End schemas ==>

let movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    actors: {
        type: [actorSchema],
        required: true
    },
    genders: {
        type: [genderSchema],
        required: true
    },
    director: {
        type: {
            directorSchema
        },
        required: true
    },
    writers: {
        type: [writerSchema],
        required: true,
    },
    year: {
        type: Date,
        required: true,
    },
    cover: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('movie', movieSchema);

// La propiedad unique de validacion me dio errores por duplicacion de datos