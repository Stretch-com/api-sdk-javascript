export class Session {
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

export default Session;
