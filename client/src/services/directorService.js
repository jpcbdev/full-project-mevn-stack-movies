const url = "http://localhost:3000";

export default {


    async getDirectors() {
        return await fetch(`${url}/directors`, {
                method: 'get'
            }).then(res => res.json())
            .catch(() => "Error");

    },
    async getDirectorById(id) {
        return await fetch(`${url}/directors/${id}`, {
            method: 'get'
        }).then(res => res.json());

    },
    async addDirector(body) {
        return await fetch(`${url}/directors`, {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
            }).then(res => res.json())
            .catch(() => "Error");
    },
    async updateDirector(id, body) {
        return await fetch(`${url}/directors/${id}`, {
                method: 'put',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
            }).then(res => res.json())
            .catch(() => "Error");
    },
    async deleteDirector(id) {
        return await fetch(`${url}/directors/${id}`, {
            method: 'delete',
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json());

    }
}

// no estaba usando el return