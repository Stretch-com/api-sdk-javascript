export class Nav {
  constructor(client) {
    this._client = client;
  }

  async getLocation() {
    if (await this._client.checkAuth()) {
      return await this._client.get(`/nav/location`);
    }
  }

  async getLocations() {
    if (await this._client.checkAuth()) {
      return await this._client.get(`/nav/locations`);
    }
  }

  async postLocation(location) {
    if (await this._client.checkAuth()) {
      return await this._client.post(`/nav/location`, location);
    }
  }

  async putLocation(locationId, location) {
    if (await this._client.checkAuth()) {
      return await this._client.put(`/nav/location/${locationId}`, location);
    }
  }

  async deleteLocation(locationId, location) {
    if (await this._client.checkAuth()) {
      return await this._client.delete(`/nav/location/${locationId}`, location);
    }
  }

  // Geolocation & geocoding
  async geosearch(query) {
    if (await this._client.checkAuth()) {
      return await this._client.get(`/nav/geosearch`, query);
    }
  }

  async geocoding(lng, lat) {
    if (await this._client.checkAuth()) {
      return await this._client.get(`/nav/geocoding/${lng},${lat}`);
    }
  }
}

export default Nav;
