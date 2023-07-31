class Admin {
  constructor(client) {
    this._client = client;
  }

  // Coaches endpoints
  async getCoaches(query = {}) {
    if (await this._client.checkAuth()) {
      return await this._client.get(`/admin/coaches`, query);
    }
  }

  async getCoachesCount(query = {}) {
    if (await this._client.checkAuth()) {
      return await this._client.get(`/admin/coaches/count`, query);
    }
  }

  async postCoach(payload = {}) {
    if (await this._client.checkAuth()) {
      return await this._client.post(`/admin/coach`, payload);
    }
  }

  // Clients endpoints
  async getClients(query = {}) {
    if (await this._client.checkAuth()) {
      return await this._client.get(`/admin/clients`, query);
    }
  }

  async getClientsCount(query = {}) {
    if (await this._client.checkAuth()) {
      return await this._client.get(`/admin/clients/count`, query);
    }
  }

  // Feedback endpoints
  async postSupportFeedback(form) {
    if (await this._client.checkAuth()) {
      return await this._client.postForm(`/admin/support/feedback`, form);
    }
  }

  // Sessions endpoints
  async getSessions(query = {}) {
    if (await this._client.checkAuth()) {
      return await this._client.get("/admin/sessions", query);
    }
  }

  async getSessionCount(query = {}) {
    if (await this._client.checkAuth()) {
      return await this._client.get("/admin/sessions/count", query);
    }
  }
}

export default Admin;
