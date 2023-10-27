class Admin {
  constructor(client) {
    this._client = client;
  }

  // User endpoints
  async getUserBlacklist(userId, query = {}) {
    if (await this._client.checkAuth())
      return await this._client.get(`/admin/user/${userId}/blacklist`, query);
  }

  async getUserBlacklistCount(userId, query = {}) {
    if (await this._client.checkAuth())
      return await this._client.get(
        `/admin/user/${userId}/blacklist/count`,
        query
      );
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

  async getClientSummaryInfo(clientId, query) {
    if (await this._client.checkAuth())
      return await this._client.get(`/admin/client/${clientId}/info`, query);
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

  // Refunds endpoint
  async getRefunds(query) {
    if (await this._client.checkAuth())
      return await this._client.get(`/admin/refunds`, query);
  }

  async getRefundsCount(query) {
    if (await this._client.checkAuth())
      return await this._client.get(`/admin/refunds/count`, query);
  }

  async getRefundDetails(reportId) {
    if (await this._client.checkAuth())
      return await this._client.get(`/admin/refund/${reportId}`);
  }

  async putRefund(reportId, query) {
    if (await this._client.checkAuth())
      return await this._client.put(`/admin/refund/${reportId}`, query);
  }

  // Reports endpoint
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

  async getConsumerLanguages(query) {
    if (await this._client.checkAuth())
      return await this._client.get(`/admin/config/languages`, query);
  }

  async postLanguages(query) {
    if (await this._client.checkAuth())
      return await this._client.post(`/admin/config/languages`, query);
  }
}

export default Admin;
