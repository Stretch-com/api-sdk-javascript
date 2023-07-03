class Nav {
    constructor(client) {
        this._client = client;
    }

    async getLocations() {
        if (await this.checkAuth()) {
            return await this._client.get(`/nav/locations`);
        }
    }

    async postLocation(location) {
        if (await this.checkAuth()) {
            return await this._client.post(`/nav/location`, location);
        }
    }

    async putLocation(locationId, location) {
        if (await this.checkAuth()) {
            return await this._client.put(`/nav/location/${locationId}`, location);
        }
    }

    async deleteLocation(locationId, location) {
        if (await this.checkAuth()) {
            return await this._client.delete(`/nav/location/${locationId}`, location);
        }
    }
}

export default Nav;
