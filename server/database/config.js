const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

function _connect() {
    mongoose.connect(process.env.SERVER, {
            useNewUrlParser: true,
            useFindAndModify: false
        })
        .then(() => console.log('Db connect'))
        .catch((error) => console.log(error));
}

module.exports = {
    _connect
}