const url = "http://localhost:3000";

export default {


    async getActors() {
        return await fetch(`${url}/actors`, {
                method: 'get'
            }).then(res => res.json())
            .catch(() => "Error");

    },
    async getActorById(id) {
        return await fetch(`${url}/actors/${id}`, {
            method: 'get'
        }).then(res => res.json())

    },
    async addActor(body) {
        return await fetch(`${url}/actors`, {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
            }).then(res => res.json())
            .catch(() => "Error");
    },
    async updateActor(id, body) {
        return await fetch(`${url}/actors/${id}`, {
                method: 'put',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
            }).then(res => res.json())
            .catch(() => "Error");
    },
    async deleteActor(id) {
        return await fetch(`${url}/actors/${id}`, {
            method: 'delete',
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json());

    }
}

// no estaba usando el return