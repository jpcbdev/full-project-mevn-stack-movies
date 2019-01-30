// Modules
const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const Router = require('./api/api.js');
const helmet = require('helmet');
require('dotenv').config();

// Uses
const port = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
if (process.env.MODE == !"test") {
    app.use(morgan('dev'));

}
app.use(cors());
app.use(Router);
app.use(helmet());


// Listen
app.listen(port, (req, res) => {
    console.log(`Servidor online en el puerto: ${port}`)
});

// Db connect
require('./database/config.js')._connect();

console.log(process.env.MODE);

// Export server for unit tests
module.exports = app;