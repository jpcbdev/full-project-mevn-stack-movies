const {
    chai,
    server,
    expect
} = require('./config.js');

describe('/GET movies', () => {
    it('should get all movies', (done) => {
        chai.request(server)
            .get('/movies')
            .end((error, res) => {
                expect(res).to.have.status(200);
            })
        done();
    })
});

describe('/GET/:id movies', () => {
    it('should get a movie by id', (done) => {
        chai.request(server)
            .get('/movies/5c58bb54db88c829665f13a0')
            .end((error, res) => {
                expect(res).to.have.status(200);
            })
        done();
    })
});

describe('/POST movies', () => {
    it('shoul add a new movie', (done) => {
        chai.request(server)
            .post('/movies')
            .send({
                "title": "primer pelicula",
                "rating": 4,
                "actors": [{
                        "dni": null,
                        "email": "robi@linux.org",
                        "photo": "https://gq-images.condecdn.net/image/9XDZ1w29lvg/crop/1800/f/Robin-Williams-02-GQ-3Aug17_getty_b.jpg",
                        "firstName": "Robin",
                        "firstSurname": "Williams",
                        "birthdate": "N/A"
                    },
                    {
                        "dni": null,
                        "email": "robi@linux.org",
                        "photo": "https://gq-images.condecdn.net/image/9XDZ1w29lvg/crop/1800/f/Robin-Williams-02-GQ-3Aug17_getty_b.jpg",
                        "firstName": "Robin",
                        "firstSurname": "Williams",
                        "birthdate": "N/A"
                    }
                ],
                "genders": [{
                        "name": "Terror",
                        "description": "The most popular gender of world"
                    },
                    {
                        "name": "Terror",
                        "description": "The most popular gender of world"
                    }
                ],
                "director": {
                    "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Steven_Spielberg_by_Gage_Skidmore.jpg/1200px-Steven_Spielberg_by_Gage_Skidmore.jpg",
                    "firstName": "Steven",
                    "firstSurname": "Steven Jr",
                    "email": "stevespi@gmail.com"
                },
                "writers": [{
                    "photo": "https://m.media-amazon.com/images/M/MV5BMjE0NDI1MDU5Nl5BMl5BanBnXkFtZTgwNjQ2ODMwMzE@._V1_.jpg",
                    "firstName": "Federico",
                    "firstSurname": "Fillini",
                    "email": "fedefi@yahoo.com"
                }],
                "year": 2011,
                "cover": "https://static1.squarespace.com/static/51e6a8f0e4b0ad7024843ce4/t/51f7bfe9e4b05ef87d6ba7f6/1375191017412/example_Album_Cover.jpg?format=original"
            })
            .end((error, res) => {
                expect(res).to.have.status(200);
            })
        done();
    })
});

describe('/PUT/:id movies', () => {
    it('should update a movie by id', (done) => {
        chai.request(server)
            .put('/movies/5c58bb54db88c829665f13a0')
            .send({
                "title": "primer pelicula",
                "rating": 4,
                "actors": [{
                        "dni": null,
                        "email": "robi@linux.org",
                        "photo": "https://gq-images.condecdn.net/image/9XDZ1w29lvg/crop/1800/f/Robin-Williams-02-GQ-3Aug17_getty_b.jpg",
                        "firstName": "Robin",
                        "firstSurname": "Williams",
                        "birthdate": "N/A"
                    },
                    {
                        "dni": null,
                        "email": "robi@linux.org",
                        "photo": "https://gq-images.condecdn.net/image/9XDZ1w29lvg/crop/1800/f/Robin-Williams-02-GQ-3Aug17_getty_b.jpg",
                        "firstName": "Robin",
                        "firstSurname": "Williams",
                        "birthdate": "N/A"
                    }
                ],
                "genders": [{
                        "name": "Terror",
                        "description": "The most popular gender of world"
                    },
                    {
                        "name": "Terror",
                        "description": "The most popular gender of world"
                    }
                ],
                "director": {
                    "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Steven_Spielberg_by_Gage_Skidmore.jpg/1200px-Steven_Spielberg_by_Gage_Skidmore.jpg",
                    "firstName": "Steven",
                    "firstSurname": "Steven Jr",
                    "email": "stevespi@gmail.com"
                },
                "writers": [{
                    "photo": "https://m.media-amazon.com/images/M/MV5BMjE0NDI1MDU5Nl5BMl5BanBnXkFtZTgwNjQ2ODMwMzE@._V1_.jpg",
                    "firstName": "Federico",
                    "firstSurname": "Fillini",
                    "email": "fedefi@yahoo.com"
                }],
                "year": 2011,
                "cover": "https://static1.squarespace.com/static/51e6a8f0e4b0ad7024843ce4/t/51f7bfe9e4b05ef87d6ba7f6/1375191017412/example_Album_Cover.jpg?format=original"
            })
            .end((error, res) => {
                expect(res).to.have.status(200);
            })
        done();
    })
});

describe('/DELETE/:id movies', () => {
    it('should delete a movie by id', (done) => {
        chai.request(server)
            .delete('/movies/5c58bdd28744102b85fd8890')
            .end((error, res) => {
                expect(res).to.have.status(200);
            })
        done();
    })
})