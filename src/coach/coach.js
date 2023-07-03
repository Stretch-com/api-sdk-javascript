export class Coach {
  constructor(client) {
    this._client = client;
  }

  async getCoachProfile(coachId) {
    if (await this._client.checkAuth()) {
      return await this._client.get(`/coach/${coachId}/profile`);
    }
  }

  // Coach availability CRUD
  async getCoachAvailability() {
    if (await this._client.checkAuth()) {
      return await this._client.get(`/coach/availability`);
    }
  }

  async createTimeAvailability(payload) {
    if (await this._client.checkAuth()) {
      return await this._client.post("/coach/availability", payload);
    }
  }

  async updateTimeAvailability(availabilityId, payload) {
    if (await this._client.checkAuth()) {
      return await this._client.put(
        `/coach/availability/${availabilityId}`,
        payload
      );
    }
  }

  async removeSlotAvailability(availabilityId) {
    if (await this._client.checkAuth()) {
      return await this._client.post(`/coach/availability/${availabilityId}`);
    }
  }

  // Coach service CRUD
  async getServiceTypes() {
    if (await this._client.checkAuth()) {
      return await this._client.get("/servicetypes");
    }
  }

  async getCoachServices(query = {}) {
    if (await this._client.checkAuth()) {
      return await this._client.get("/coach/services", query);
    }
  }

  async createCoachService(payload) {
    if (await this._client.checkAuth()) {
      return await this._client.post("/coach/service", payload);
    }
  }

  async updateCoachService(serviceId, payload) {
    if (await this._client.checkAuth()) {
      return await this._client.put(`/coach/${serviceId}`, payload);
    }
  }

  async deleteCoachService(serviceId) {
    if (await this._client.checkAuth()) {
      return await this._client.post(`/coach/${serviceId}`);
    }
  }
}

export default Coach;
