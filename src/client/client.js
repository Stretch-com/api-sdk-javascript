class Client {
  constructor(client) {
    this._client = client;
  }

  async getClientReviews(clientId) {
    if (await this._client.checkAuth())
      return await this._client.get(`/client/${clientId}/reviews`);
  }

  async getClientReviewsInfo(clientId) {
    if (await this._client.checkAuth())
      return await this._client.get(`/client/${clientId}/reviews/info`);
  }
}

export default Client;
