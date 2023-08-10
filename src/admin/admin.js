class Admin {
  constructor(client) {
    this._client = client;
  }

  // Coach endpoints
  async getCoaches(query = {}) {
    if (await this._client.checkAuth())
      return await this._client.get(`/admin/coaches`, query);
  }

  async getCoachesCount(query = {}) {
    if (await this._client.checkAuth())
      return await this._client.get(`/admin/coaches/count`, query);
  }

  async postCoach(payload = {}) {
    if (await this._client.checkAuth())
      return await this._client.post(`/admin/coach`, payload);
  }

  async putCoach(coachId, payload = {}) {
    if (await this._client.checkAuth())
      return await this._client.put(`/admin/coach/${coachId}`, payload);
  }

  // Client endpoints
  async getClients(query = {}) {
    if (await this._client.checkAuth())
      return await this._client.get(`/admin/clients`, query);
  }

  async getClientsCount(query = {}) {
    if (await this._client.checkAuth())
      return await this._client.get(`/admin/clients/count`, query);
  }

  // Feedback endpoints
  async postSupportFeedback(form) {
    if (await this._client.checkAuth())
      return await this._client.postForm(`/admin/support/feedback`, form);
  }

  // Sessions endpoints
  async getSessions(query = {}) {
    if (await this._client.checkAuth())
      return await this._client.get("/admin/sessions", query);
  }

  async getSessionCount(query = {}) {
    if (await this._client.checkAuth())
      return await this._client.get("/admin/sessions/count", query);
  }

  // Review endpoints
  async getReviews(query = {}) {
    if (await this._client.checkAuth())
      return await this._client.get("/admin/reviews", query);
  }

  async putReview(reviewId, query = {}) {
    if (await this._client.checkAuth())
      return await this._client.put(`/admin/review/${reviewId}`, query);
  }

  // Transaction endpoints
  async getTransactions(query = {}) {
    if (await this._client.checkAuth())
      return await this._client.get(`/admin/transactions/`, query);
  }

  async getTransactionsCount(query = {}) {
    if (await this._client.checkAuth())
      return await this._client.get(`/admin/transactions/count`, query);
  }

  async getTransactionsInfo() {
    if (await this._client.checkAuth())
      return await this._client.get(`/admin/transactions/info`);
  }

  async getTransactionDetail(transactionId) {
    if (await this._client.checkAuth())
      return await this._client.get(`/admin/transaction/${transactionId}`);
  }

  async refundTransaction(transactionId, query) {
    if (await this._client.checkAuth())
      return await this._client.put(
        `/admin/transaction/${transactionId}/refund`,
        query
      );
  }
}

export default Admin;
