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

  async postCoach(query = {}) {
    if (await this._client.checkAuth())
      return await this._client.post(`/admin/coach`, query);
  }

  async getCoachDetails(coachId) {
    if (await this._client.checkAuth())
      return await this._client.get(`/admin/coach/${coachId}`);
  }

  async putCoach(coachId, query = {}) {
    if (await this._client.checkAuth())
      return await this._client.put(`/admin/coach/${coachId}`, query);
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

  async getClientDetails(clientId) {
    if (await this._client.checkAuth())
      return await this._client.get(`/admin/client/${clientId}`);
  }

  async getClientSummaryInfo(clientId) {
    if (await this._client.checkAuth())
      return await this._client.get(`/admin/client/${clientId}/info`);
  }

  async putClient(clientId, query) {
    if (await this._client.checkAuth())
      return await this._client.put(`/admin/client/${clientId}`, query);
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
      return await this._client.get(`/admin/transactions`, query);
  }

  async getTransactionsCount(query = {}) {
    if (await this._client.checkAuth())
      return await this._client.get(`/admin/transactions/count`, query);
  }

  async getTransactionsInfo(query = {}) {
    if (await this._client.checkAuth())
      return await this._client.get(`/admin/transactions/info`, query);
  }

  async getTransactionDetails(transactionId) {
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

  // Verification endpoint
  async getVerifications(query) {
    if (await this._client.checkAuth())
      return await this._client.get(`/admin/verifications`, query);
  }

  async getVerificationsCount(query) {
    if (await this._client.checkAuth())
      return await this._client.get(`/admin/verifications/count`, query);
  }

  async postCoachReport(coachId, query) {
    if (await this._client.checkAuth())
      return await this._client.post(
        `/admin/verification/${coachId}/report`,
        query
      );
  }

  // Report endpoint
  async getReports(query) {
    if (await this._client.checkAuth())
      return await this._client.get(`/admin/reports`, query);
  }

  async getReportsCount(query) {
    if (await this._client.checkAuth())
      return await this._client.get(`/admin/reports/count`, query);
  }

  async getReportDetails(reportId) {
    if (await this._client.checkAuth())
      return await this._client.get(`/admin/report/${reportId}`);
  }

  async putReport(reportId, query) {
    if (await this._client.checkAuth())
      return await this._client.put(`/admin/report/${reportId}`, query);
  }

  // Withdrawal endpoint
  async getWithdrawals(query) {
    if (await this._client.checkAuth())
      return await this._client.get(`/admin/withdrawals`, query);
  }

  async getWithdrawalsCount(query) {
    if (await this._client.checkAuth())
      return await this._client.get(`/admin/withdrawals/count`, query);
  }

  async getWithdrawalDetails(withdrawalId) {
    if (await this._client.checkAuth())
      return await this._client.get(`/admin/withdrawal/${withdrawalId}`);
  }

  // Properties endpoint
  async getProperties(query) {
    if (await this._client.checkAuth())
      return await this._client.get(`/admin/config/fields`, query);
  }
}

export default Admin;
