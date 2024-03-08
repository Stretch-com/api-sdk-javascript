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

  async adminPutUser(userId, payload) {
    if (await this._client.checkAuth())
      return await this._client.put(`/admin/user/${userId}/edit`, payload);
  }

  // Business endpoints
  async getBusinessFilters() {
    if (await this._client.checkAuth())
      return await this._client.get(`/admin/business/filters`);
  }

  async getBusinesses(payload = {}) {
    if (await this._client.checkAuth())
      return await this._client.post(`/admin/businesses`, payload);
  }

  async getBusinessesCount(payload = {}) {
    if (await this._client.checkAuth())
      return await this._client.post(`/admin/businesses/count`, payload);
  }

  async getBusinessDetails(businessId) {
    if (await this._client.checkAuth())
      return await this._client.get(`/admin/business/${businessId}`);
  }

  async postBusiness(query = {}) {
    if (await this._client.checkAuth())
      return await this._client.post(`/admin/business`, query);
  }

  async putBusiness(businessId, payload = {}) {
    if (await this._client.checkAuth())
      return await this._client.put(`/admin/business/${businessId}`, payload);
  }

  async deleteBusiness(businessId, query) {
    if (await this._client.checkAuth())
      return await this._client.delete(`/admin/business/${businessId}`, query);
  }

  async postBoostBusiness(businessId) {
    if (await this._client.checkAuth())
      return await this._client.post(
        `/admin/business/${businessId}/boost-profile`
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

  async deleteCoach(coachId, query) {
    if (await this._client.checkAuth())
      return await this._client.delete(`/admin/coach/${coachId}`, query);
  }

  async postBoostProfile(coachId) {
    if (await this._client.checkAuth())
      return await this._client.post(`/admin/coach/${coachId}/boost-profile`);
  }

  async getCoachClientsList(coachId, query) {
    if (await this._client.checkAuth())
      return await this._client.get(`/admin/coach/${coachId}/clients`, query);
  }

  async getCoachClientsListCount(coachId, query) {
    if (await this._client.checkAuth())
      return await this._client.get(
        `/admin/coach/${coachId}/clients/count`,
        query
      );
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

  async deleteClient(clientId, query) {
    if (await this._client.checkAuth())
      return await this._client.delete(`/admin/client/${clientId}`, query);
  }

  async getClientCoachesList(clientId, query) {
    if (await this._client.checkAuth())
      return await this._client.get(`/admin/client/${clientId}/coaches`, query);
  }

  async getClientCoachesListCount(clientId, query) {
    if (await this._client.checkAuth())
      return await this._client.get(
        `/admin/client/${clientId}/coaches/count`,
        query
      );
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

  async getSession(sessionId) {
    if (await this._client.checkAuth())
      return await this._client.get(`/admin/session/${sessionId}`);
  }

  // Review endpoints
  async getReviews(query = {}) {
    if (await this._client.checkAuth())
      return await this._client.get("/admin/reviews", query);
  }

  async getReviewsInfo(userId, query = {}) {
    if (await this._client.checkAuth())
      return await this._client.get(`/admin/review/${userId}/info`, query);
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

  async getConsumerCurrencies(query) {
    if (await this._client.checkAuth())
      return await this._client.get(`/admin/config/currencies`, query);
  }

  async getConsumers() {
    if (await this._client.checkAuth())
      return await this._client.get(`/admin/config/consumers`);
  }

  async postConsumer(payload) {
    if (await this._client.checkAuth())
      return await this._client.post(`/admin/config/consumer`, payload);
  }

  async putConsumer(clientId, payload) {
    if (await this._client.checkAuth())
      return await this._client.put(
        `/admin/config/consumer/${clientId}`,
        payload
      );
  }

  async deleteConsumer(clientId, payload) {
    if (await this._client.checkAuth())
      return await this._client.delete(
        `/admin/config/consumer/${clientId}`,
        undefined,
        payload
      );
  }

  async getAdminUserConfig() {
    if (await this._client.checkAuth())
      return await this._client.get(`/admin/user/config`);
  }

  // Analytics endpoint
  async revenueAnalytics(query) {
    if (await this._client.checkAuth())
      return await this._client.get("/admin/analytics/revenue", query);
  }

  async revenueChartAnalytics(query) {
    if (await this._client.checkAuth())
      return await this._client.get("/admin/analytics/revenue-chart", query);
  }

  async sessionInfoAnalytics(query) {
    if (await this._client.checkAuth())
      return await this._client.get("/admin/analytics/session-info", query);
  }

  async totalUserAnalytics(query) {
    if (await this._client.checkAuth())
      return await this._client.get("/admin/analytics/users", query);
  }

  async bestCoachAnalytics(query) {
    if (await this._client.checkAuth())
      return await this._client.get("/admin/analytics/best-users", query);
  }

  async getAdminAnalyticsSummary(query) {
    if (await this._client.checkAuth())
      return await this._client.get("/admin/analytics/summary", query);
  }

  async getCoachAnalyticsSummary(coachId, query) {
    if (await this._client.checkAuth())
      return await this._client.get(
        `/admin/analytics/coach/${coachId}/summary`,
        query
      );
  }

  async getClientAnalyticsSummary(clientId, query) {
    if (await this._client.checkAuth())
      return await this._client.get(
        `/admin/analytics/client/${clientId}/summary`,
        query
      );
  }

  async getThreads(reviewId) {
    if (await this._client.checkAuth())
      return await this._client.get(`/admin/review/${reviewId}/threads`);
  }

  async putThread(reviewId, threadId, payload) {
    if (await this._client.checkAuth())
      return await this._client.put(
        `/admin/review/${reviewId}/thread/${threadId}`,
        payload
      );
  }
}

export default Admin;
