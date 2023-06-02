export class Search {

    constructor(client) { //
        this._client = client;
    }

    async search(payload = {}) {
        return await this.postSearch(payload)
    }

    async count(payload = {}) {
        return await this.postCount(payload)
    }

    async filter(payload = {}) {
        return await this.getFilter(payload)
    }


    async postSearch(payload = {}) {
        if (await this._client.checkAuth()) {
            return await this._client.post(`/search`)
        }
    }

    async postCount(payload = {}) {
        if (await this._client.checkAuth()) {
            return await this._client.post(`/search/count`)
        }
    }

    async getFilter(payload = {}) {
        if (await this._client.checkAuth()) {
            return await this._client.get(`/search/filter`)
        }
    }
}

export default Search;