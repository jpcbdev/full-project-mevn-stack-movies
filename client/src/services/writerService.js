const url = "http://localhost:3000";

export default {


    async getWriters() {
        return await fetch(`${url}/writers`, {
                method: 'get'
            }).then(res => res.json())
            .catch(() => "Error");

    },
    async getWriterById(id) {
        return await fetch(`${url}/writers/${id}`, {
            method: 'get'
        }).then(res => res.json())

    },
    async addWriter(body) {
        return await fetch(`${url}/writers`, {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
            }).then(res => res.json())
            .catch(() => "Error");
    },
    async updateWriter(id, body) {
        return await fetch(`${url}/writers/${id}`, {
                method: 'put',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
            }).then(res => res.json())
            .catch(() => "Error");
    },
    async deleteWriter(id) {
        return await fetch(`${url}/writers/${id}`, {
            method: 'delete',
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json());

    }
}

// no estaba usando el return