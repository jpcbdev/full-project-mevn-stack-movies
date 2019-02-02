const {
    server,
    chai,
    expect
} = require('./config');


describe('/GET actors', () => {
    it('should get all autors data', (done) => {
        chai.request(server)
            .get('/actors')
            .end(function (err, res) {
                expect(res).to.have.status(200);
                done();
            });
    });
});

describe("/GET/:id", () => {
    it("should get an actor by id", (done) => {
        chai.request(server)
            .get("/actors/5c5184a7ed9ad419509bc6d5")
            .end((error, res) => {
                expect(res).to.have.status(200);
            })
        done();
    })
});

describe('/POST actors', () => {
    it('should post an actor', (done) => {
        chai.request(server)
            .post('/actors')
            .type('form')
            .send({
                email: "empty_test",
                birthdate: "1992/02/19",
                firstName: "manolito_test",
                dni: "sasasasasa_test",
                firstSurname: "sumatra_test",
            }).end((error, res) => {
                expect(res).to.have.status(200);
                done();
            })
    })
});

describe('/PUT actors', () => {
    it('should put an actor', (done) => {
        chai.request(server)
            .put('/actors/5c5184a7ed9ad419509bc6d5')
            .send({
                email: "updated",
                birthdate: "updated",
                firstName: "updated",
                dni: "updated",
                firstSurname: "updated"
            })
            .end((error, res) => {
                expect(res).to.have.status(200);
            })
        done();
    })
});

describe("/DELETE actors", () => {
    it("should delete an actor", (done) => {
        chai.request(server)
            .delete('/actors/5c51e2e9f7d3ac5659c63adf')
            .end((error, res) => {
                expect(res).to.have.status(200);
            })
        done();
    })
})












//   Necesito exportar el servidor desde index.js y importarlo aca