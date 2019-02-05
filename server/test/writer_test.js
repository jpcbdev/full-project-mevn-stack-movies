const {
    chai,
    server,
    expect
} = require('./config');

describe('/GET writers', () => {
    it('should get all writers', (done) => {
        chai.request(server)
            .get('/writers')
            .end((error, res) => {
                expect(res).to.have.status(200);
            })
        done();
    })
});

describe('/GET/:id writers', () => {
    it('should get a writer by id', (done) => {
        chai.request(server)
            .get('/writers/5c577d05f48a02771286da41')
            .end((error, res) => {
                expect(res).to.have.status(200);
            })
        done();
    })
});

describe('/POST writers', () => {
    it('should add a new writer', (done) => {
        chai.request(server)
            .post('/writers')
            .send({
                firstName: 'test',
                firstSurname: 'test',
                email: 'test',
                photo: 'test'
            })
            .end((error, res) => {
                expect(res).to.have.status(200)
            })
        done();
    })
});

describe('/PUT/:id writers', () => {
    it('should update a writer', (done) => {
        chai.request(server)
            .put('/writers/5c577d05f48a02771286da41')
            .send({
                firstName: 'update test',
                firstSurname: 'update test',
                email: 'update test',
                photo: 'update test'
            })
            .end((error, res) => {
                expect(res).to.have.status(200);
            })
        done();
    })
});

// describe('DELETE/:id writers', () => {
//     it('should delete a writer', (done) => {
//         chai.request(server)
//             .delete('/writers/5c589ac72b6eb3147d1d314d')
//             .end((error, res) => {
//                 expect(res).to.have.status(200);
//             })
//         done();
//     })
// })