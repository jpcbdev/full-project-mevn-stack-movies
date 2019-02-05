const url = "http://localhost:3000";

export default {


    async getMovies() {
        return await fetch(`${url}/movies`, {
                method: 'get'
            }).then(res => res.json())
            .catch(() => "Error");

    },
    async getMovieById(id) {
        return await fetch(`${url}/movies/${id}`, {
            method: 'get'
        }).then(res => res.json())

    },
    async addMovie(body) {
        return await fetch(`${url}/movies`, {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
            }).then(res => res.json())
            .catch(() => "Error");
    },
    async updateMovie(id, body) {
        return await fetch(`${url}/movies/${id}`, {
                method: 'put',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
            }).then(res => res.json())
            .catch(() => "Error");
    },
    async deleteMOvie(id) {
        return await fetch(`${url}/movies/${id}`, {
            method: 'delete',
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json());

    }
}

// no estaba usando el return