const {
    chai,
    expect,
    server
} = require('./config');

describe('/GET directors', () => {
    it('should get all directors', (done) => {
        chai.request(server)
            .get('/directors')
            .end((error, res) => {
                expect(res).to.have.status(200);
            })
        done();
    })
});

describe('/GET/:id directors', () => {
    it('should get a director by id', (done) => {
        chai.request(server)
            .get('/directors/5c5770c48a02a569c5dc7ba1')
            .end((error, res) => {
                expect(res).to.have.status(200);
            })
        done();
    })
});

describe('/POST directors', () => {
    it('should add a new director', (done) => {
        chai.request(server)
            .post('/directors')
            .send({
                "firstName": "Olga updateeed",
                "firstSurname": "Marks",
                "email": "olgmarks.@yahoo.com",
                "photo": "http://1.bp.blogspot.com/_D5oVqCM-2J8/TPbh5Ja0sBI/AAAAAAAAACM/9RWezR3lhNk/s320/renee-zellweger22.jpg"
            })
            .end((error, res) => {
                expect(res).to.have.status(200);
            })
        done();
    })
});

describe('/PUT/:id directors', () => {
    it('should update a director by id', (done) => {
        chai.request(server)
            .put('/directors/5c577d05f48a02771286da41')
            .send({
                "firstName": "updated",
                "firstSurname": "updated",
                "email": "updated",
                "photo": "updated"
            })
            .end((error, res) => {
                expect(res).to.have.status(200);
            })

        done();
    })
});

describe('/DELETE/:id directors', () => {
    it('should delete a director by id', (done) => {
        chai.request(server)
            .delete('/directors/5c577d0d6df8fa773d8c9eab')
            .end((error, res) => {
                expect(res).to.have.status(200);
            })
        done();
    })
});