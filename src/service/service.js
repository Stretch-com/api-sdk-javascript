class Service {
  constructor(client) {
    this._client = client;
  }

  async getServiceTypes() {
    if (await this._client.checkAuth())
      return await this._client.get("/servicetypes");
  }

  async getService(serviceId) {
    if (await this._client.checkAuth())
      return await this._client.get(`/service/${serviceId}`);
  }

  async getAvailabilityService(serviceId, query = {}) {
    if (await this._client.checkAuth())
      return await this._client.post(
        `/service/${serviceId}/availability`,
        query
      );
  }

  async getCoachReviews(coachId) {
    if (await this._client.checkAuth())
      return await this._client.get(`/service/${coachId}/reviews`);
  }
}

export default Service;
