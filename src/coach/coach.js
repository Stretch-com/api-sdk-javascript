export class Coach {
  constructor(client) {
    this._client = client;
  }

  async getProfile(coachId) {
    if (await this._client.checkAuth()) {
      return await this._client.get(`/coach/${coachId}/profile`);
    }
  }

  // Coach availability CRUD
  async getAvailability() {
    if (await this._client.checkAuth()) {
      return await this._client.get(`/coach/availability`);
    }
  }

  async postAvailability(payload) {
    if (await this._client.checkAuth()) {
      return await this._client.post("/coach/availability", payload);
    }
  }

  async putAvailability(availabilityId, payload) {
    if (await this._client.checkAuth()) {
      return await this._client.put(
        `/coach/availability/${availabilityId}`,
        payload
      );
    }
  }

  async deleteAvailability(availabilityId) {
    if (await this._client.checkAuth()) {
      return await this._client.delete(`/coach/availability/${availabilityId}`);
    }
  }

  // Coach service CRUD
  async getServiceTypes() {
    if (await this._client.checkAuth()) {
      return await this._client.get("/servicetypes");
    }
  }

  async getServices(query = {}) {
    if (await this._client.checkAuth()) {
      return await this._client.get("/coach/services", query);
    }
  }

  async postService(payload) {
    if (await this._client.checkAuth()) {
      return await this._client.post("/coach/service", payload);
    }
  }

  async putService(serviceId, payload) {
    if (await this._client.checkAuth()) {
      return await this._client.put(`/coach/${serviceId}`, payload);
    }
  }

  async deleteService(serviceId) {
    if (await this._client.checkAuth()) {
      return await this._client.delete(`/coach/${serviceId}`);
    }
  }
}

export default Coach;
