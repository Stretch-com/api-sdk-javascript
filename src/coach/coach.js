class Coach {
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

  async getAvailabilityCalendar(query) {
    if (await this._client.checkAuth())
      return await this._client.get(`/coach/availability/calendar`, query);
  }

  async getAvailabilityCalendar(payload = {}) {
    if (await this._client.checkAuth())
      return await this._client.get(`/coach/availability/calendar`, payload);
  }

  async postAvailability(payload) {
    if (await this._client.checkAuth())
      return await this._client.post("/coach/availability", payload);
  }

  async postAvailabilities(payload) {
    if (await this._client.checkAuth())
      return await this._client.post("/coach/availabilities", payload);
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

  async deleteAvailabilityByDate(date) {
    if (await this._client.checkAuth())
      return await this._client.delete(`/availabilities/available/${date}`);
  }

  async deleteAvailabilityByDate(date) {
    if (await this._client.checkAuth())
      return await this._client.delete(`/availabilities/available/${date}`);
  }

  // Coach service CRUD
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

  // Coach reviews
  async getUserReviews(userId) {
    if (await this._client.checkAuth())
      return await this._client.get(`/user/${userId}/reviews`);
  }

  async getUserReviewsInfo(userId) {
    if (await this._client.checkAuth())
      return await this._client.get(`/user/${userId}/reviews/info`);
  }
}

export default Coach;
