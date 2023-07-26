export class Coach {
  constructor(client) {
    this._client = client;
  }

  async getProfile(coachId) {
    if (await this._client.checkAuth())
      return await this._client.get(`/coach/${coachId}/profile`);
  }

  // Coach availability CRUD
  async getAvailability() {
    if (await this._client.checkAuth())
      return await this._client.get(`/coach/availability`);
  }

  async getAvailabilityCalendar(payload = {}) {
    if (await this._client.checkAuth())
      return await this._client.get(`/coach/availability/calendar`, payload);
  }

  async postAvailability(payload) {
    if (await this._client.checkAuth())
      return await this._client.post("/coach/availability", payload);
  }

  async putAvailability(availabilityId, payload) {
    if (await this._client.checkAuth())
      return await this._client.put(
        `/coach/availability/${availabilityId}`,
        payload
      );
  }

  async deleteAvailability(availabilityId) {
    if (await this._client.checkAuth())
      return await this._client.delete(`/coach/availability/${availabilityId}`);
  }

  // Coach service CRUD
  async getServiceTypes() {
    if (await this._client.checkAuth())
      return await this._client.get("/servicetypes");
  }

  async getServices(query = {}) {
    if (await this._client.checkAuth())
      return await this._client.get("/coach/services", query);
  }

  async postService(payload) {
    if (await this._client.checkAuth())
      return await this._client.post("/coach/service", payload);
  }

  async putService(serviceId, payload) {
    if (await this._client.checkAuth())
      return await this._client.put(`/coach/${serviceId}`, payload);
  }

  async deleteService(serviceId) {
    if (await this._client.checkAuth())
      return await this._client.delete(`/coach/${serviceId}`);
  }

  // Coach activation
  async putAvailable(query = {}) {
    if (await this._client.checkAuth())
      return await this._client.put("/coach/available", query);
  }

  // Session
  async getSession(sessionId) {
    if (await this._client.checkAuth())
      return await this._client.get(`/session/${sessionId}`);
  }

  async putSession(sessionId, query = {}) {
    if (await this._client.checkAuth())
      return await this._client.put(`/session/${sessionId}`, query);
  }

  async cancelSession(sessionId, message) {
    if (await this._client.checkAuth())
      return await this._client.put(`/session/${sessionId}/cancel`, {
        message,
      });
  }

  async refundSession(sessionId, message) {
    if (await this._client.checkAuth())
      return await this._client.get(`/session/${sessionId}/refund`, {
        message,
      });
  }
}

export default Coach;
