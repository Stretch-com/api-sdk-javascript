import { components, operations } from "../../types/admin";
import { StretchAuth } from "../common/auth";

class Admin {
  _client: StretchAuth;

  constructor(client: StretchAuth) {
    this._client = client;
  }

  // Coach endpoints
  async getCoaches(
    query: operations["get_coaches_api_v1_admin_coaches_get"]["parameters"]["query"]
  ): Promise<components["schemas"]["AdminCoachSummaryViewOut"][] | undefined> {
    if (await this._client.checkAuth())
      return await this._client.get(`/admin/coaches`, query);
  }

  async getCoachesCount(
    query: operations["get_coaches_count_api_v1_admin_coaches_count_get"]["parameters"]["query"]
  ) {
    if (await this._client.checkAuth())
      return await this._client.get(`/admin/coaches/count`, query);
  }

  async postCoach(
    payload: operations["create_new_coach_api_v1_admin_coach_post"]["requestBody"]["content"]["application/json"]
  ): Promise<components["schemas"]["UserProfileOut"] | undefined> {
    if (await this._client.checkAuth())
      return await this._client.post(`/admin/coach`, payload);
  }

  async getCoachDetails(
    coachId: string
  ): Promise<components["schemas"]["AdminCoachDetailViewOut"] | undefined> {
    if (await this._client.checkAuth())
      return await this._client.get(`/admin/coach/${coachId}`);
  }

  async putCoach(
    coachId: string,
    payload: operations["update_coach_api_v1_admin_coach__coach_id__put"]["requestBody"]["content"]["application/json"]
  ): Promise<components["schemas"]["StretchResponse"] | undefined> {
    if (await this._client.checkAuth())
      return await this._client.put(`/admin/coach/${coachId}`, payload);
  }

  async deleteCoach(
    coachId: string,
    query: operations["get_coaches_count_api_v1_admin_coaches_count_get"]["parameters"]["query"]
  ): Promise<components["schemas"]["StretchResponse"] | undefined> {
    if (await this._client.checkAuth())
      return await this._client.delete(`/admin/coach/${coachId}`, query);
  }

  async postBoostProfile(
    coachId: string
  ): Promise<components["schemas"]["StretchResponse"] | undefined> {
    if (await this._client.checkAuth())
      return await this._client.post(`/admin/coach/${coachId}/boost-profile`);
  }

  async getCoachClientsList(
    coachId: string,
    query: operations["get_coach_clients_list_api_v1_admin_coach__coach_id__clients_get"]["parameters"]["query"]
  ): Promise<components["schemas"]["AdminClientSummaryViewOut"][] | undefined> {
    if (await this._client.checkAuth())
      return await this._client.get(`/admin/coach/${coachId}/clients`, query);
  }

  async getCoachClientsListCount(
    coachId: string,
    query: operations["get_coach_clients_list_count_api_v1_admin_coach__coach_id__clients_count_get"]["parameters"]["query"]
  ) {
    if (await this._client.checkAuth())
      return await this._client.get(
        `/admin/coach/${coachId}/clients/count`,
        query
      );
  }

  // Client endpoints
  async getClients(
    query: operations["get_clients_api_v1_admin_clients_get"]["parameters"]["query"]
  ): Promise<components["schemas"]["AdminClientSummaryViewOut"][] | undefined> {
    if (await this._client.checkAuth())
      return await this._client.get(`/admin/clients`, query);
  }

  async getClientsCount(
    query: operations["get_clients_count_api_v1_admin_clients_count_get"]["parameters"]["query"]
  ) {
    if (await this._client.checkAuth())
      return await this._client.get(`/admin/clients/count`, query);
  }

  async getClientDetails(
    clientId: string
  ): Promise<components["schemas"]["AdminClientDetailOut"] | undefined> {
    if (await this._client.checkAuth())
      return await this._client.get(`/admin/client/${clientId}`);
  }

  async putClient(
    clientId: string,
    payload: operations["update_client_api_v1_admin_client__client_id__put"]["requestBody"]["content"]["application/json"]
  ): Promise<components["schemas"]["AdminCoachUpdateIn"] | undefined> {
    if (await this._client.checkAuth())
      return await this._client.put(`/admin/client/${clientId}`, payload);
  }

  async deleteClient(
    clientId: string,
    query: operations["delete_client_api_v1_admin_client__client_id__delete"]["parameters"]["query"]
  ): Promise<components["schemas"]["StretchResponse"] | undefined> {
    if (await this._client.checkAuth())
      return await this._client.delete(`/admin/client/${clientId}`, query);
  }

  async getClientSummaryInfo(
    clientId: string,
    query: operations["get_client_summary_info_api_v1_admin_client__client_id__info_get"]["parameters"]["query"]
  ): Promise<components["schemas"]["AdminClientSummaryOut"] | undefined> {
    if (await this._client.checkAuth())
      return await this._client.get(`/admin/client/${clientId}/info`, query);
  }

  async postClient(
    payload: operations["create_new_client_api_v1_admin_client_post"]["requestBody"]["content"]["application/json"]
  ): Promise<components["schemas"]["UserProfileOut"] | undefined> {
    if (await this._client.checkAuth())
      return await this._client.get(`/admin/client`, payload);
  }

  async getClientCoachesList(
    clientId: string,
    query: operations["get_client_coaches_list_api_v1_admin_client__client_id__coaches_get"]["parameters"]["query"]
  ): Promise<components["schemas"]["AdminCoachSummaryViewOut"][] | undefined> {
    if (await this._client.checkAuth())
      return await this._client.get(`/admin/client/${clientId}/coaches`, query);
  }

  async getClientCoachesListCount(
    clientId: string,
    query: operations["get_client_coaches_list_count_api_v1_admin_client__client_id__coaches_count_get"]["parameters"]["query"]
  ) {
    if (await this._client.checkAuth())
      return await this._client.get(
        `/admin/client/${clientId}/coaches/count`,
        query
      );
  }

  // Category endpoints
  async getCategories(): Promise<
    components["schemas"]["CategoryOut"][] | undefined
  > {
    if (await this._client.checkAuth())
      return await this._client.get(`/admin/categories`);
  }

  async postCategory(
    payload: operations["post_create_category_api_v1_admin_category_post"]["requestBody"]["content"]["application/json"]
  ): Promise<components["schemas"]["CategoryOut"] | undefined> {
    if (await this._client.checkAuth())
      return await this._client.post(`/admin/category`, payload);
  }

  async putCategory(
    categoryId: string,
    payload: operations["put_update_category_api_v1_admin_category__category_id__put"]["requestBody"]["content"]["application/json"]
  ): Promise<components["schemas"]["CategoryOut"] | undefined> {
    if (await this._client.checkAuth())
      return await this._client.put(`/admin/category/${categoryId}`, payload);
  }

  async deleteCategory(
    categoryId: string
  ): Promise<components["schemas"]["StretchResponse"] | undefined> {
    if (await this._client.checkAuth())
      return await this._client.delete(`/admin/category/${categoryId}`);
  }

  async getCategoryImport(
    formData: FormData
  ): Promise<components["schemas"]["AdminCoachSummaryViewOut"][] | undefined> {
    if (await this._client.checkAuth())
      return await this._client.get(`/admin/category/import`, formData, null);
  }

  // Business endpoints
  async getBusinessImport(
    formData: FormData
  ): Promise<components["schemas"]["AdminCoachSummaryViewOut"][] | undefined> {
    if (await this._client.checkAuth())
      return await this._client.get(`/admin/category/import`, formData, null);
  }

  async getBusinessAutocomplete(
    query: operations["get_business_autocomplete_api_v1_admin_business_autocomplete_get"]["parameters"]["query"]
  ): Promise<
    components["schemas"]["AdminBusinessAutocompleteOut"][] | undefined
  > {
    if (await this._client.checkAuth())
      return await this._client.get(`/admin/business/autocomplete`, query);
  }

  async getBusinessFilters(): Promise<
    components["schemas"]["BusinessFiltersOut"] | undefined
  > {
    if (await this._client.checkAuth())
      return await this._client.get(`/admin/business/filters`);
  }

  async getBusinesses(
    payload: operations["search_businesses_api_v1_admin_businesses_post"]["requestBody"]["content"]["application/json"]
  ): Promise<
    components["schemas"]["AdminBusinessSummaryViewOut"][] | undefined
  > {
    if (await this._client.checkAuth())
      return await this._client.post(`/admin/businesses`, payload);
  }

  async getBusinessesCount(
    payload: operations["get_businesses_count_api_v1_admin_businesses_count_post"]["requestBody"]["content"]["application/json"]
  ) {
    if (await this._client.checkAuth())
      return await this._client.post(`/admin/businesses/count`, payload);
  }

  async getBusinessDetails(
    businessId: string
  ): Promise<components["schemas"]["BusinessProfileOut"] | undefined> {
    if (await this._client.checkAuth())
      return await this._client.get(`/admin/business/${businessId}`);
  }

  async postBusiness(
    query: operations["create_new_business_api_v1_admin_business_post"]["requestBody"]["content"]["application/json"]
  ): Promise<components["schemas"]["UserProfileOut"] | undefined> {
    if (await this._client.checkAuth())
      return await this._client.post(`/admin/business`, query);
  }

  async putBusiness(
    businessId: string,
    payload: operations["update_business_status_api_v1_admin_business__business_id__put"]["requestBody"]["content"]["application/json"]
  ) {
    if (await this._client.checkAuth())
      return await this._client.put(`/admin/business/${businessId}`, payload);
  }

  async deleteBusiness(
    businessId: string,
    query: operations["delete_business_api_v1_admin_business__business_id__delete"]["parameters"]["query"]
  ) {
    if (await this._client.checkAuth())
      return await this._client.delete(`/admin/business/${businessId}`, query);
  }

  // User endpoints
  async getUserBlacklist(
    userId: string,
    query: operations["get_user_blacklist_api_v1_admin_user__user_id__blacklist_get"]["parameters"]["query"]
  ): Promise<components["schemas"]["AdminClientSummaryViewOut"][] | undefined> {
    if (await this._client.checkAuth())
      return await this._client.get(`/admin/user/${userId}/blacklist`, query);
  }

  async getUserBlacklistCount(
    userId: string,
    query: operations["get_user_blacklist_count_api_v1_admin_user__user_id__blacklist_count_get"]["parameters"]["query"]
  ) {
    if (await this._client.checkAuth())
      return await this._client.get(
        `/admin/user/${userId}/blacklist/count`,
        query
      );
  }

  async putUser(
    userId: string,
    payload: operations["edit_user_api_v1_admin_user__user_id__edit_put"]["requestBody"]["content"]["application/json"]
  ) {
    if (await this._client.checkAuth())
      return await this._client.put(`/admin/user/${userId}/edit`, payload);
  }

  async getUserConfig(): Promise<
    components["schemas"]["AdminUserConfigOut"] | undefined
  > {
    if (await this._client.checkAuth())
      return await this._client.get(`/admin/user/config`);
  }

  // Sessions endpoints
  async getSessions(
    query: operations["get_sessions_api_v1_admin_sessions_get"]["parameters"]["query"]
  ): Promise<
    components["schemas"]["AdminSessionSummaryViewOut"][] | undefined
  > {
    if (await this._client.checkAuth())
      return await this._client.get("/admin/sessions", query);
  }

  async getSessionCount(
    query: operations["get_session_count_api_v1_admin_sessions_count_get"]["parameters"]["query"]
  ): Promise<components["schemas"]["AdminSessionSummaryCountOut"] | undefined> {
    if (await this._client.checkAuth())
      return await this._client.get("/admin/sessions/count", query);
  }

  async getSession(
    sessionId: string
  ): Promise<components["schemas"]["AdminSessionViewOut"] | undefined> {
    if (await this._client.checkAuth())
      return await this._client.get(`/admin/session/${sessionId}`);
  }

  // Feedback endpoints
  async postSupportFeedback(formData: FormData) {
    if (await this._client.checkAuth())
      return await this._client.postForm(`/admin/support/feedback`, formData);
  }

  // Review endpoints
  async getReviews(
    query: operations["get_reviews_api_v1_admin_reviews_get"]["parameters"]["query"]
  ): Promise<components["schemas"]["SessionReviewOut"][] | undefined> {
    if (await this._client.checkAuth())
      return await this._client.get("/admin/reviews", query);
  }

  async getReviewsInfo(
    userId: string,
    query: operations["get_reviews_analytics_info_api_v1_admin_review__user_id__info_get"]["parameters"]["query"]
  ): Promise<components["schemas"]["SessionReviewInfoOut"] | undefined> {
    if (await this._client.checkAuth())
      return await this._client.get(`/admin/review/${userId}/info`, query);
  }

  async putReview(
    reviewId: string,
    query: operations["update_review_api_v1_admin_review__review_id__put"]["requestBody"]["content"]["application/json"]
  ) {
    if (await this._client.checkAuth())
      return await this._client.put(`/admin/review/${reviewId}`, query);
  }

  // Transaction endpoints
  async getTransactions(
    query: operations["get_transactions_api_v1_admin_transactions_get"]["parameters"]["query"]
  ): Promise<components["schemas"]["AdminTransactionViewOut"][] | undefined> {
    if (await this._client.checkAuth())
      return await this._client.get(`/admin/transactions`, query);
  }

  async getTransactionsCount(
    query: operations["get_transaction_count_api_v1_admin_transactions_count_get"]["parameters"]["query"]
  ): Promise<
    components["schemas"]["AdminTransactionSummaryCountOut"] | undefined
  > {
    if (await this._client.checkAuth())
      return await this._client.get(`/admin/transactions/count`, query);
  }

  async getTransactionsInfo(
    query: operations["get_transaction_info_api_v1_admin_transactions_info_get"]["parameters"]["query"]
  ): Promise<
    components["schemas"]["AdminTransactionSummaryInfoOut"] | undefined
  > {
    if (await this._client.checkAuth())
      return await this._client.get(`/admin/transactions/info`, query);
  }

  async getTransactionDetails(
    transactionId: string
  ): Promise<components["schemas"]["AdminTransactionDetailView"] | undefined> {
    if (await this._client.checkAuth())
      return await this._client.get(`/admin/transaction/${transactionId}`);
  }

  async refundTransaction(
    transactionId: string,
    query: operations["refund_transaction_api_v1_admin_transaction__transaction_id__refund_put"]["requestBody"]["content"]["application/json"]
  ) {
    if (await this._client.checkAuth())
      return await this._client.put(
        `/admin/transaction/${transactionId}/refund`,
        query
      );
  }

  // Verification endpoint
  async getVerifications(
    query: operations["get_verifications_api_v1_admin_verifications_get"]["parameters"]["query"]
  ): Promise<
    components["schemas"]["AdminCoachVerifySummaryOut"][] | undefined
  > {
    if (await this._client.checkAuth())
      return await this._client.get(`/admin/verifications`, query);
  }

  async getVerificationsCount(
    query: operations["get_verifications_count_api_v1_admin_verifications_count_get"]["parameters"]["query"]
  ) {
    if (await this._client.checkAuth())
      return await this._client.get(`/admin/verifications/count`, query);
  }

  async postCoachReport(
    coachId: string,
    query: operations["create_coach_report_api_v1_admin_verification__coach_id__report_post"]["requestBody"]["content"]["application/json"]
  ): Promise<components["schemas"]["AdminResolvedReportOut"] | undefined> {
    if (await this._client.checkAuth())
      return await this._client.post(
        `/admin/verification/${coachId}/report`,
        query
      );
  }

  // Refunds endpoint
  async getRefunds(
    query: operations["get_refunds_api_v1_admin_refunds_get"]["parameters"]["query"]
  ): Promise<components["schemas"]["AdminRefundSummaryOut"][] | undefined> {
    if (await this._client.checkAuth())
      return await this._client.get(`/admin/refunds`, query);
  }

  async getRefundsCount(
    query: operations["get_refunds_count_api_v1_admin_refunds_count_get"]["parameters"]["query"]
  ): Promise<components["schemas"]["AdminRefundSummaryCountOut"] | undefined> {
    if (await this._client.checkAuth())
      return await this._client.get(`/admin/refunds/count`, query);
  }

  async getRefundDetails(
    reportId: string
  ): Promise<components["schemas"]["AdminReportDetailOut"] | undefined> {
    if (await this._client.checkAuth())
      return await this._client.get(`/admin/refund/${reportId}`);
  }

  async putRefund(
    reportId: string,
    query: operations["resolve_refund_api_v1_admin_refund__report_id__put"]["requestBody"]["content"]["application/json"]
  ): Promise<components["schemas"]["AdminResolvedReportOut"] | undefined> {
    if (await this._client.checkAuth())
      return await this._client.put(`/admin/refund/${reportId}`, query);
  }

  // Reports endpoint
  async getReports(
    query: operations["get_reports_api_v1_admin_reports_get"]["parameters"]["query"]
  ): Promise<components["schemas"]["AdminReportSummaryOut"][] | undefined> {
    if (await this._client.checkAuth())
      return await this._client.get(`/admin/reports`, query);
  }

  async getReportsCount(
    query: operations["get_reports_count_api_v1_admin_reports_count_get"]["parameters"]["query"]
  ): Promise<components["schemas"]["AdminReportSummaryCountOut"] | undefined> {
    if (await this._client.checkAuth())
      return await this._client.get(`/admin/reports/count`, query);
  }

  async getReportDetails(
    reportId: string
  ): Promise<components["schemas"]["AdminReportDetailOut"] | undefined> {
    if (await this._client.checkAuth())
      return await this._client.get(`/admin/report/${reportId}`);
  }

  // Properties endpoints
  async getProperties(
    query: operations["get_user_properties_api_v1_admin_config_fields_get"]["parameters"]["query"]
  ): Promise<components["schemas"]["AdminUserPropertyFieldOut"][] | undefined> {
    if (await this._client.checkAuth())
      return await this._client.get(`/admin/config/fields`, query);
  }

  async postProperty(
    payload: operations["create_new_user_property_api_v1_admin_config_field_post"]["requestBody"]["content"]["application/json"]
  ): Promise<components["schemas"]["AdminUserPropertyFieldOut"] | undefined> {
    if (await this._client.checkAuth())
      return await this._client.post(`/admin/config/field`, payload);
  }

  async putProperty(
    propertyId: string,
    payload: operations["update_user_property_api_v1_admin_config_field__property_field_id__put"]["requestBody"]["content"]["application/json"]
  ): Promise<components["schemas"]["AdminUserPropertyFieldOut"] | undefined> {
    if (await this._client.checkAuth())
      return await this._client.put(
        `/admin/config/field/${propertyId}`,
        payload
      );
  }

  async deleteProperty(propertyId: string) {
    if (await this._client.checkAuth())
      return await this._client.delete(`/admin/config/field/${propertyId}`);
  }

  // Consumer endpoints
  async getConsumers(): Promise<
    components["schemas"]["ConsumerOut"][] | undefined
  > {
    if (await this._client.checkAuth())
      return await this._client.get(`/admin/config/consumers`);
  }

  async postConsumer(
    payload: operations["create_consumer_api_v1_admin_config_consumer_post"]["requestBody"]["content"]["application/json"]
  ): Promise<components["schemas"]["ConsumerOut"] | undefined> {
    if (await this._client.checkAuth())
      return await this._client.post(`/admin/config/consumer`, payload);
  }

  async putConsumer(
    clientId: string,
    payload: operations["update_consumer_api_v1_admin_config_consumer__client_id__put"]["requestBody"]["content"]["application/json"]
  ): Promise<components["schemas"]["ConsumerOut"] | undefined> {
    if (await this._client.checkAuth())
      return await this._client.put(
        `/admin/config/consumer/${clientId}`,
        payload
      );
  }

  async deleteConsumer(clientId: string, payload) {
    if (await this._client.checkAuth())
      return await this._client.delete(
        `/admin/config/consumer/${clientId}`,
        undefined,
        payload
      );
  }

  // Config endpoints
  async getConsumerLanguages(
    query: operations["get_consumer_languages_api_v1_admin_config_languages_get"]["parameters"]["query"]
  ): Promise<components["schemas"]["LanguagesConfigOut"] | undefined> {
    if (await this._client.checkAuth())
      return await this._client.get(`/admin/config/languages`, query);
  }

  async getConsumerCurrencies(
    query: operations["get_consumer_currencies_api_v1_admin_config_currencies_get"]["parameters"]["query"]
  ): Promise<string[] | undefined> {
    if (await this._client.checkAuth())
      return await this._client.get(`/admin/config/currencies`, query);
  }

  async postServiceTypes(
    payload: operations["bulk_create_service_types_api_v1_admin_config_service_types_post"]["requestBody"]["content"]["application/json"]
  ): Promise<components["schemas"]["ServiceTypeOut"][] | undefined> {
    if (await this._client.checkAuth())
      return await this._client.post(`/admin/config/service-types`, payload);
  }

  async deleteServiceType(serviceTypeId: string) {
    if (await this._client.checkAuth())
      return await this._client.delete(
        `/admin/config/service-type/${serviceTypeId}`
      );
  }

  async postPaymentMethod(
    payload: operations["create_or_update_method_api_v1_admin_config_method_post"]["requestBody"]["content"]["application/json"]
  ): Promise<components["schemas"]["PaymentMethodOut"] | undefined> {
    if (await this._client.checkAuth())
      return await this._client.post(`/admin/config/method`, payload);
  }

  // Withdrawal endpoint
  async getWithdrawals(
    query: operations["get_withdrawals_api_v1_admin_withdrawals_get"]["parameters"]["query"]
  ): Promise<components["schemas"]["AdminWithdrawalSummaryOut"][] | undefined> {
    if (await this._client.checkAuth())
      return await this._client.get(`/admin/withdrawals`, query);
  }

  async getWithdrawalsCount(
    query: operations["get_withdrawals_count_api_v1_admin_withdrawals_count_get"]["parameters"]["query"]
  ): Promise<
    components["schemas"]["AdminWithdrawalSummaryCountOut"] | undefined
  > {
    if (await this._client.checkAuth())
      return await this._client.get(`/admin/withdrawals/count`, query);
  }

  async getWithdrawalDetails(
    withdrawalId: string
  ): Promise<components["schemas"]["AdminWithdrawalDetailOut"] | undefined> {
    if (await this._client.checkAuth())
      return await this._client.get(`/admin/withdrawal/${withdrawalId}`);
  }

  // Analytics endpoint
  async revenueAnalytics(
    query: operations["revenue_analytics_api_v1_admin_analytics_revenue_get"]["parameters"]["query"]
  ): Promise<components["schemas"]["AdminWithdrawalDetailOut"] | undefined> {
    if (await this._client.checkAuth())
      return await this._client.get("/admin/analytics/revenue", query);
  }

  async revenueChartAnalytics(
    query: operations["revenue_chart_analytics_api_v1_admin_analytics_revenue_chart_get"]["parameters"]["query"]
  ): Promise<components["schemas"]["AdminRevenueChartOut"] | undefined> {
    if (await this._client.checkAuth())
      return await this._client.get("/admin/analytics/revenue-chart", query);
  }

  async sessionInfoAnalytics(
    query: operations["session_info_analytics_api_v1_admin_analytics_session_info_get"]["parameters"]["query"]
  ): Promise<components["schemas"]["SessionInfoAnalyticsOut"] | undefined> {
    if (await this._client.checkAuth())
      return await this._client.get("/admin/analytics/session-info", query);
  }

  async totalUserAnalytics(
    query: operations["total_user_analytics_api_v1_admin_analytics_users_get"]["parameters"]["query"]
  ): Promise<components["schemas"]["UserAnalyticsOut"] | undefined> {
    if (await this._client.checkAuth())
      return await this._client.get("/admin/analytics/users", query);
  }

  async bestCoachAnalytics(
    query: operations["get_best_user_analytics_api_v1_admin_analytics_best_users_get"]["parameters"]["query"]
  ): Promise<components["schemas"]["AdminBestUserOut"][] | undefined> {
    if (await this._client.checkAuth())
      return await this._client.get("/admin/analytics/best-users", query);
  }

  async getAnalyticsSummary(
    query: operations["get_admin_analytics_summary_api_v1_admin_analytics_summary_get"]["parameters"]["query"]
  ): Promise<components["schemas"]["AdminAnalyticsSummary"] | undefined> {
    if (await this._client.checkAuth())
      return await this._client.get("/admin/analytics/summary", query);
  }

  async getCoachAnalyticsSummary(
    coachId: string,
    query: operations["coach_analytics_summary_api_v1_admin_analytics_coach__coach_id__summary_get"]["parameters"]["query"]
  ): Promise<components["schemas"]["AdminCoachAnalyticsSummary"] | undefined> {
    if (await this._client.checkAuth())
      return await this._client.get(
        `/admin/analytics/coach/${coachId}/summary`,
        query
      );
  }

  async getClientAnalyticsSummary(
    clientId: string,
    query: operations["client_analytics_summary_api_v1_admin_analytics_client__client_id__summary_get"]["parameters"]["query"]
  ): Promise<components["schemas"]["AdminClientAnalyticsSummary"] | undefined> {
    if (await this._client.checkAuth())
      return await this._client.get(
        `/admin/analytics/client/${clientId}/summary`,
        query
      );
  }

  async getDashboardAnalytics(): Promise<
    components["schemas"]["AdminDashboardAnalytics"] | undefined
  > {
    if (await this._client.checkAuth())
      return await this._client.get(`/admin/analytics/dashboard`);
  }

  // Equipments endpoint
  async getEquipments(
    query: operations["get_equipments_api_v1_admin_equipments_get"]["parameters"]["query"]
  ): Promise<
    components["schemas"]["AdminEquipmentSummaryViewOut"][] | undefined
  > {
    if (await this._client.checkAuth())
      return await this._client.get(`/admin/equipments`, query);
  }

  async getEquipmentsCount(
    query: operations["get_equipments_count_api_v1_admin_equipments_count_get"]["parameters"]["query"]
  ) {
    if (await this._client.checkAuth())
      return await this._client.get(`/admin/equipments/count`, query);
  }
}

export default Admin;
