class Session {
  constructor(client) {
    this._client = client;
  }

  async getSession(sessionId) {
    if (await this._client.checkAuth())
      return await this._client.get(`/session/${sessionId}`);
  }

  async putSession(sessionId, query = {}) {
    if (await this._client.checkAuth())
      return await this._client.put(`/session/${sessionId}`, query);
  }

  async cancelSession(sessionId, query = {}) {
    if (await this._client.checkAuth())
      return await this._client.put(`/session/${sessionId}/cancel`, query);
  }

  async refundSession(sessionId, query = {}) {
    if (await this._client.checkAuth())
      return await this._client.get(`/session/${sessionId}/refund`, query);
  }

  async getSessionReviews(sessionId) {
    if (await this._client.checkAuth())
      return await this._client.get(`/session/${sessionId}/reviews`);
  }
}

export default Session;
