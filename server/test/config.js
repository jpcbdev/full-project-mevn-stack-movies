process.env.MODE = 'test';
process.env.SERVER = "mongodb://localhost/moviemax_test";

const server = require('../index');
const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
chai.use(chaiHttp);

module.exports = {
    server,
    chai,
    expect
}