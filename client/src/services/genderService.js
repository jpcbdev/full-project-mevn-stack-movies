const url = "http://localhost:3000";

export default {
    async getGenders() {
        return await fetch(`${url}/genders`, {
            method: 'get'
        }).then(res => res.json());
    },
    async getGenderById(id) {
        return fetch(`${url}/genders/${id}`, {
            method: 'get'
        }).then(res => res.json());
    },
    async addGender(body) {
        return await fetch(`${url}/genders`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }).then(res => res.json());
    },
    async updateGender(id, body) {
        return await fetch(`${url}/genders/${id}`, {
            method: 'put',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        }).then(res => res.json());
    },
    async deleteGender(id) {
        return await fetch(`${url}/genders/${id}`, {
            method: 'delete'
        }).then(res => res.json());
    }

}