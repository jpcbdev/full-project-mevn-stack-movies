const {
    chai,
    expect,
    server
} = require('./config');

describe("/GET genders", () => {
    it("should get all genders", (done) => {
        chai.request(server)
            .get('/genders')
            .end((error, res) => {
                expect(res).to.have.status(200);
            })
        done();
    })
});

describe("/GET/:id genders", () => {
    it("should a gender by id", (done) => {
        chai.request(server)
            .get('/genders/5c54880aa13b7723b0be057d')
            .end((error, res) => {
                expect(res).to.have.status(200);
            })
        done();
    })
})

describe("/POST genders", () => {
    it("should post a new gender", (done) => {
        chai.request(server)
            .post('/genders')
            .type('form')
            .send({
                name: "test_gender",
                description: "description for test gender"
            })
            .end((error, res) => {
                expect(res).to.have.status(200);
            })
        done();
    })
});

describe("/PUT genders", () => {
    it("should update a gender", (done) => {
        chai.request(server)
            .put('/genders/5c54880aa13b7723b0be057d')
            .send({
                name: "gender updated",
                description: "update for gender"
            })
            .end((error, res) => {
                expect(res).to.have.status(200);
            })
        done()
    });
});

// describe("/DELETE genders", () => {
//     it("should delete a gender by id", (done) => {
//         chai.request(server)
//             .delete("/genders/5c548937fdc1c124c90c9f02")
//             .end((error, res) => {
//                 expect(res).to.have.status(200);
//             })
//         done();
//     })
// })