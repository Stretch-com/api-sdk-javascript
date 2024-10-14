import { paths } from "../../types/admin";
import { StretchResponse } from "../../types/response";
import { StretchAuth } from "../common/auth";
import { payloadToFormData } from "../common/utils";

class Admin {
  auth: StretchAuth;

  constructor(stretchAuth: StretchAuth) {
    this.auth = stretchAuth;
  }

  // Coach endpoints
  async getCoaches(
    query: paths["/api/v1/admin/coaches"]["get"]["parameters"]["query"]
  ): Promise<
    | paths["/api/v1/admin/coaches"]["get"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.auth.checkAuth())
      return await this.auth.get(`/admin/coaches`, query);
  }

  async getCoachesCount(
    query: paths["/api/v1/admin/coaches/count"]["get"]["parameters"]["query"]
  ): Promise<
    | paths["/api/v1/admin/coaches/count"]["get"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.auth.checkAuth())
      return await this.auth.get(`/admin/coaches/count`, query);
  }

  async getCoachDetails(
    coachId: string
  ): Promise<
    | paths["/api/v1/admin/coach/{coach_id}"]["get"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.auth.checkAuth())
      return await this.auth.get(`/admin/coach/${coachId}`);
  }

  async postCoach(
    payload: paths["/api/v1/admin/coach"]["post"]["requestBody"]["content"]["application/json"]
  ): Promise<
    | paths["/api/v1/admin/coach"]["post"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.auth.checkAuth())
      return await this.auth.post(`/admin/coach`, payload);
  }

  async putCoach(
    coachId: string,
    payload: paths["/api/v1/admin/coach/{coach_id}"]["put"]["requestBody"]["content"]["application/json"]
  ): Promise<
    | paths["/api/v1/admin/coach/{coach_id}"]["put"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.auth.checkAuth())
      return await this.auth.put(`/admin/coach/${coachId}`, payload);
  }

  async deleteCoach(
    coachId: string,
    query: paths["/api/v1/admin/coach/{coach_id}"]["delete"]["parameters"]["query"]
  ): Promise<
    | paths["/api/v1/admin/coach/{coach_id}"]["delete"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.auth.checkAuth())
      return await this.auth.delete(`/admin/coach/${coachId}`, query);
  }

  async postBoostProfile(
    coachId: string
  ): Promise<
    | paths["/api/v1/admin/coach/{coach_id}/boost-profile"]["post"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.auth.checkAuth())
      return await this.auth.post(`/admin/coach/${coachId}/boost-profile`);
  }

  async getCoachClientsList(
    coachId: string,
    query: paths["/api/v1/admin/coach/{coach_id}/clients"]["get"]["parameters"]["query"]
  ): Promise<
    | paths["/api/v1/admin/coach/{coach_id}/clients"]["get"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.auth.checkAuth())
      return await this.auth.get(`/admin/coach/${coachId}/clients`, query);
  }

  async getCoachClientsListCount(
    coachId: string,
    query: paths["/api/v1/admin/coach/{coach_id}/clients/count"]["get"]["parameters"]["query"]
  ): Promise<
    | paths["/api/v1/admin/coach/{coach_id}/clients/count"]["get"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.auth.checkAuth())
      return await this.auth.get(
        `/admin/coach/${coachId}/clients/count`,
        query
      );
  }

  // Client endpoints
  async getClients(
    query: paths["/api/v1/admin/clients"]["get"]["parameters"]["query"]
  ): Promise<
    | paths["/api/v1/admin/clients"]["get"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.auth.checkAuth())
      return await this.auth.get(`/admin/clients`, query);
  }

  async getClientsCount(
    query: paths["/api/v1/admin/clients/count"]["get"]["parameters"]["query"]
  ): Promise<
    | paths["/api/v1/admin/clients/count"]["get"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.auth.checkAuth())
      return await this.auth.get(`/admin/clients/count`, query);
  }

  async getClientDetails(
    clientId: string
  ): Promise<
    | paths["/api/v1/admin/client/{client_id}"]["get"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.auth.checkAuth())
      return await this.auth.get(`/admin/client/${clientId}`);
  }

  async getClientSummaryInfo(
    clientId: string,
    query: paths["/api/v1/admin/client/{client_id}/info"]["get"]["parameters"]["query"]
  ): Promise<
    | paths["/api/v1/admin/client/{client_id}/info"]["get"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.auth.checkAuth())
      return await this.auth.get(`/admin/client/${clientId}/info`, query);
  }

  async postClient(
    payload: paths["/api/v1/admin/client"]["post"]["requestBody"]["content"]["application/json"]
  ): Promise<
    | paths["/api/v1/admin/client"]["post"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.auth.checkAuth())
      return await this.auth.get(`/admin/client`, payload);
  }

  async putClient(
    clientId: string,
    payload: paths["/api/v1/admin/client/{client_id}"]["put"]["requestBody"]["content"]["application/json"]
  ): Promise<
    | paths["/api/v1/admin/client/{client_id}"]["put"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.auth.checkAuth())
      return await this.auth.put(`/admin/client/${clientId}`, payload);
  }

  async deleteClient(
    clientId: string,
    query: paths["/api/v1/admin/client/{client_id}"]["delete"]["parameters"]["query"]
  ): Promise<
    | paths["/api/v1/admin/client/{client_id}"]["delete"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.auth.checkAuth())
      return await this.auth.delete(`/admin/client/${clientId}`, query);
  }

  async getClientCoachesList(
    clientId: string,
    query: paths["/api/v1/admin/client/{client_id}/coaches"]["get"]["parameters"]["query"]
  ): Promise<
    | paths["/api/v1/admin/client/{client_id}/coaches"]["get"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.auth.checkAuth())
      return await this.auth.get(`/admin/client/${clientId}/coaches`, query);
  }

  async getClientCoachesListCount(
    clientId: string,
    query: paths["/api/v1/admin/client/{client_id}/coaches/count"]["get"]["parameters"]["query"]
  ): Promise<
    | paths["/api/v1/admin/client/{client_id}/coaches/count"]["get"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.auth.checkAuth())
      return await this.auth.get(
        `/admin/client/${clientId}/coaches/count`,
        query
      );
  }

  // Category endpoints
  async getCategories(): Promise<
    | paths["/api/v1/admin/categories"]["get"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.auth.checkAuth())
      return await this.auth.get(`/admin/categories`);
  }

  async postCategory(
    payload: paths["/api/v1/admin/category"]["post"]["requestBody"]["content"]["application/json"]
  ): Promise<
    | paths["/api/v1/admin/category"]["post"]["responses"]["201"]["content"]["application/json"]
    | undefined
  > {
    if (await this.auth.checkAuth())
      return await this.auth.post(`/admin/category`, payload);
  }

  async putCategory(
    categoryId: string,
    payload: paths["/api/v1/admin/category/{category_id}"]["put"]["requestBody"]["content"]["application/json"]
  ): Promise<
    | paths["/api/v1/admin/category/{category_id}"]["put"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.auth.checkAuth())
      return await this.auth.put(`/admin/category/${categoryId}`, payload);
  }

  async putCategoriesOrder(
    payload: paths["/api/v1/admin/categories/order"]["put"]["requestBody"]["content"]["application/json"]
  ): Promise<
    | paths["/api/v1/admin/categories/order"]["put"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.auth.checkAuth())
      return await this.auth.put(`/admin/categories/order`, payload);
  }

  async deleteCategory(
    categoryId: string
  ): Promise<
    | paths["/api/v1/admin/category/{category_id}"]["delete"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.auth.checkAuth())
      return await this.auth.delete(`/admin/category/${categoryId}`);
  }

  async getCategoryImport(
    payload: paths["/api/v1/admin/category/import"]["post"]["requestBody"]["content"]["multipart/form-data"]
  ): Promise<
    | paths["/api/v1/admin/category/import"]["post"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.auth.checkAuth()) {
      const formData = payloadToFormData(payload);
      if (formData)
        return await this.auth.get(`/admin/category/import`, formData, null);
    }
  }

  // Business endpoints
  async getBusinessImport(
    payload: paths["/api/v1/admin/business/import"]["post"]["requestBody"]["content"]["multipart/form-data"]
  ): Promise<
    | paths["/api/v1/admin/business/import"]["post"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.auth.checkAuth()) {
      const formData = payloadToFormData(payload);
      if (formData)
        return await this.auth.get(`/admin/category/import`, formData, null);
    }
  }

  async getBusinessAutocomplete(
    query: paths["/api/v1/admin/business/autocomplete"]["get"]["parameters"]["query"]
  ): Promise<
    | paths["/api/v1/admin/business/autocomplete"]["get"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.auth.checkAuth())
      return await this.auth.get(`/admin/business/autocomplete`, query);
  }

  async getBusinessFilters(): Promise<
    | paths["/api/v1/admin/business/filters"]["get"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.auth.checkAuth())
      return await this.auth.get(`/admin/business/filters`);
  }

  async getBusinesses(
    payload: paths["/api/v1/admin/businesses"]["post"]["requestBody"]["content"]["application/json"]
  ): Promise<
    | paths["/api/v1/admin/businesses"]["post"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.auth.checkAuth())
      return await this.auth.post(`/admin/businesses`, payload);
  }

  async getBusinessesCount(
    payload: paths["/api/v1/admin/businesses/count"]["post"]["requestBody"]["content"]["application/json"]
  ): Promise<
    | paths["/api/v1/admin/businesses/count"]["post"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.auth.checkAuth())
      return await this.auth.post(`/admin/businesses/count`, payload);
  }

  async getBusinessDetails(
    businessId: string
  ): Promise<
    | paths["/api/v1/admin/business/{business_id}"]["get"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.auth.checkAuth())
      return await this.auth.get(`/admin/business/${businessId}`);
  }

  async postBusiness(
    payload: paths["/api/v1/admin/business"]["post"]["requestBody"]["content"]["application/json"]
  ): Promise<
    | paths["/api/v1/admin/business"]["post"]["responses"]["201"]["content"]["application/json"]
    | undefined
  > {
    if (await this.auth.checkAuth())
      return await this.auth.post(`/admin/business`, payload);
  }

  async putBusiness(
    businessId: string,
    payload: paths["/api/v1/admin/business/{business_id}"]["put"]["requestBody"]["content"]["application/json"]
  ): Promise<
    | paths["/api/v1/admin/business/{business_id}"]["put"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.auth.checkAuth())
      return await this.auth.put(`/admin/business/${businessId}`, payload);
  }

  async deleteBusiness(
    businessId: string,
    query: paths["/api/v1/admin/business/{business_id}"]["delete"]["parameters"]["query"]
  ): Promise<
    | paths["/api/v1/admin/business/{business_id}"]["delete"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.auth.checkAuth())
      return await this.auth.delete(`/admin/business/${businessId}`, query);
  }

  // User endpoints
  async getUserBlacklist(
    userId: string,
    query: paths["/api/v1/admin/user/{user_id}/blacklist"]["get"]["parameters"]["query"]
  ): Promise<
    | paths["/api/v1/admin/user/{user_id}/blacklist"]["get"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.auth.checkAuth())
      return await this.auth.get(`/admin/user/${userId}/blacklist`, query);
  }

  async getUserBlacklistCount(
    userId: string,
    query: paths["/api/v1/admin/user/{user_id}/blacklist/count"]["get"]["parameters"]["query"]
  ): Promise<
    | paths["/api/v1/admin/user/{user_id}/blacklist/count"]["get"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.auth.checkAuth())
      return await this.auth.get(
        `/admin/user/${userId}/blacklist/count`,
        query
      );
  }

  async adminPutUser(
    userId: string,
    payload: paths["/api/v1/admin/user/{user_id}/edit"]["put"]["requestBody"]["content"]["application/json"]
  ): Promise<
    | paths["/api/v1/admin/user/{user_id}/edit"]["put"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.auth.checkAuth())
      return await this.auth.put(`/admin/user/${userId}/edit`, payload);
  }

  async getUserConfig(): Promise<
    | paths["/api/v1/admin/user/config"]["get"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.auth.checkAuth())
      return await this.auth.get(`/admin/user/config`);
  }

  async getUserFilters(): Promise<
    | paths["/api/v1/admin/user/filters"]["get"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.auth.checkAuth())
      return await this.auth.get(`/admin/user/filters`);
  }

  async getUsers(
    payload: paths["/api/v1/admin/users"]["post"]["requestBody"]["content"]["application/json"]
  ): Promise<
    | paths["/api/v1/admin/users"]["post"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.auth.checkAuth())
      return await this.auth.post(`/admin/users`, payload);
  }

  async getUsersCount(
    payload: paths["/api/v1/admin/users/count"]["post"]["requestBody"]["content"]["application/json"]
  ): Promise<
    | paths["/api/v1/admin/users/count"]["post"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.auth.checkAuth())
      return await this.auth.post(`/admin/users/count`, payload);
  }

  async postUserValidation(
    payload: paths["/api/v1/admin/user/validate"]["post"]["requestBody"]["content"]["application/json"]
  ): Promise<
    | paths["/api/v1/admin/user/validate"]["post"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.auth.checkAuth())
      return await this.auth.post(`/admin/user/validate`, payload);
  }

  // Sessions endpoints
  async getSessions(
    query: paths["/api/v1/admin/sessions"]["get"]["parameters"]["query"]
  ): Promise<
    | paths["/api/v1/admin/sessions"]["get"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.auth.checkAuth())
      return await this.auth.get("/admin/sessions", query);
  }

  async getSessionCount(
    query: paths["/api/v1/admin/sessions/count"]["get"]["parameters"]["query"]
  ): Promise<
    | paths["/api/v1/admin/sessions/count"]["get"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.auth.checkAuth())
      return await this.auth.get("/admin/sessions/count", query);
  }

  async getSession(
    sessionId: string
  ): Promise<
    | paths["/api/v1/admin/session/{session_id}"]["get"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.auth.checkAuth())
      return await this.auth.get(`/admin/session/${sessionId}`);
  }

  async putSessionRefund(
    sessionId: string,
    payload: paths["/api/v1/admin/session/{session_id}/refund"]["put"]["requestBody"]["content"]["application/json"]
  ): Promise<
    | paths["/api/v1/admin/session/{session_id}/refund"]["put"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.auth.checkAuth())
      return await this.auth.put(`/admin/session/${sessionId}/refund`, payload);
  }

  // Feedback endpoints
  async postSupportFeedback(
    payload: paths["/api/v1/admin/support/feedback"]["post"]["requestBody"]["content"]["multipart/form-data"]
  ): Promise<
    | paths["/api/v1/admin/support/feedback"]["post"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.auth.checkAuth()) {
      const formData = payloadToFormData(payload);
      if (formData)
        return await this.auth.put(
          `/admin/support/feedback`,
          formData,
          undefined
        );
    }
  }

  // Review endpoints
  async getReviews(
    query: paths["/api/v1/admin/reviews"]["get"]["parameters"]["query"]
  ): Promise<
    | paths["/api/v1/admin/reviews"]["get"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.auth.checkAuth())
      return await this.auth.get("/admin/reviews", query);
  }

  async getReviewsInfo(
    userId: string,
    query: paths["/api/v1/admin/review/{user_id}/info"]["get"]["parameters"]["query"]
  ): Promise<
    | paths["/api/v1/admin/review/{user_id}/info"]["get"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.auth.checkAuth())
      return await this.auth.get(`/admin/review/${userId}/info`, query);
  }

  async putReview(
    reviewId: string,
    query: paths["/api/v1/admin/review/{review_id}"]["put"]["requestBody"]["content"]["application/json"]
  ): Promise<
    | paths["/api/v1/admin/review/{review_id}"]["put"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.auth.checkAuth())
      return await this.auth.put(`/admin/review/${reviewId}`, query);
  }

  // Transaction endpoints
  async getTransactions(
    query: paths["/api/v1/admin/transactions"]["get"]["parameters"]["query"]
  ): Promise<
    | paths["/api/v1/admin/transactions"]["get"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.auth.checkAuth())
      return await this.auth.get(`/admin/transactions`, query);
  }

  async getTransactionsCount(
    query: paths["/api/v1/admin/transactions/count"]["get"]["parameters"]["query"]
  ): Promise<
    | paths["/api/v1/admin/transactions/count"]["get"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.auth.checkAuth())
      return await this.auth.get(`/admin/transactions/count`, query);
  }

  async getTransactionsInfo(
    query: paths["/api/v1/admin/transactions/info"]["get"]["parameters"]["query"]
  ): Promise<
    | paths["/api/v1/admin/transactions/info"]["get"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.auth.checkAuth())
      return await this.auth.get(`/admin/transactions/info`, query);
  }

  async getTransactionDownload(
    query: paths["/api/v1/admin/transaction/download"]["get"]["parameters"]["query"]
  ): Promise<StretchResponse["FileResponse"] | undefined> {
    if (await this.auth.checkAuth())
      return await this.auth.get(`/admin/transaction/download`, query);
  }

  async getTransactionDetails(
    transactionId: string
  ): Promise<
    | paths["/api/v1/admin/transaction/{transaction_id}"]["get"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.auth.checkAuth())
      return await this.auth.get(`/admin/transaction/${transactionId}`);
  }

  async refundTransaction(
    transactionId: string,
    query: paths["/api/v1/admin/transaction/{transaction_id}/refund"]["put"]["requestBody"]["content"]["application/json"]
  ): Promise<
    | paths["/api/v1/admin/transaction/{transaction_id}/refund"]["put"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.auth.checkAuth())
      return await this.auth.put(
        `/admin/transaction/${transactionId}/refund`,
        query
      );
  }

  // Verification endpoint
  async getVerifications(
    query: paths["/api/v1/admin/verifications"]["get"]["parameters"]["query"]
  ): Promise<
    | paths["/api/v1/admin/verifications"]["get"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.auth.checkAuth())
      return await this.auth.get(`/admin/verifications`, query);
  }

  async getVerificationsCount(
    query: paths["/api/v1/admin/verifications/count"]["get"]["parameters"]["query"]
  ): Promise<
    | paths["/api/v1/admin/verifications/count"]["get"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.auth.checkAuth())
      return await this.auth.get(`/admin/verifications/count`, query);
  }

  async postCoachReport(
    coachId: string,
    query: paths["/api/v1/admin/verification/{coach_id}/report"]["post"]["requestBody"]["content"]["application/json"]
  ): Promise<
    | paths["/api/v1/admin/verification/{coach_id}/report"]["post"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.auth.checkAuth())
      return await this.auth.post(
        `/admin/verification/${coachId}/report`,
        query
      );
  }

  // Refunds endpoint
  async getRefunds(
    query: paths["/api/v1/admin/refunds"]["get"]["parameters"]["query"]
  ): Promise<
    | paths["/api/v1/admin/refunds"]["get"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.auth.checkAuth())
      return await this.auth.get(`/admin/refunds`, query);
  }

  async getRefundsCount(
    query: paths["/api/v1/admin/refunds/count"]["get"]["parameters"]["query"]
  ): Promise<
    | paths["/api/v1/admin/refunds/count"]["get"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.auth.checkAuth())
      return await this.auth.get(`/admin/refunds/count`, query);
  }

  async getRefundDetails(
    reportId: string
  ): Promise<
    | paths["/api/v1/admin/refund/{report_id}"]["get"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.auth.checkAuth())
      return await this.auth.get(`/admin/refund/${reportId}`);
  }

  async putRefund(
    reportId: string,
    query: paths["/api/v1/admin/refund/{report_id}"]["put"]["requestBody"]["content"]["application/json"]
  ): Promise<
    | paths["/api/v1/admin/refund/{report_id}"]["put"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.auth.checkAuth())
      return await this.auth.put(`/admin/refund/${reportId}`, query);
  }

  // Reports endpoint
  async getReports(
    query: paths["/api/v1/admin/reports"]["get"]["parameters"]["query"]
  ): Promise<
    | paths["/api/v1/admin/reports"]["get"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.auth.checkAuth())
      return await this.auth.get(`/admin/reports`, query);
  }

  async getReportsCount(
    query: paths["/api/v1/admin/reports/count"]["get"]["parameters"]["query"]
  ): Promise<
    | paths["/api/v1/admin/reports/count"]["get"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.auth.checkAuth())
      return await this.auth.get(`/admin/reports/count`, query);
  }

  async getReportDetails(
    reportId: string
  ): Promise<
    | paths["/api/v1/admin/report/{report_id}"]["get"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.auth.checkAuth())
      return await this.auth.get(`/admin/report/${reportId}`);
  }

  // Properties endpoints
  async getProperties(
    query: paths["/api/v1/admin/config/fields"]["get"]["parameters"]["query"]
  ): Promise<
    | paths["/api/v1/admin/config/fields"]["get"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.auth.checkAuth())
      return await this.auth.get(`/admin/config/fields`, query);
  }

  async postProperty(
    payload: paths["/api/v1/admin/config/field"]["post"]["requestBody"]["content"]["application/json"]
  ): Promise<
    | paths["/api/v1/admin/config/field"]["post"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.auth.checkAuth())
      return await this.auth.post(`/admin/config/field`, payload);
  }

  async putProperty(
    propertyId: string,
    payload: paths["/api/v1/admin/config/field/{property_field_id}"]["put"]["requestBody"]["content"]["application/json"]
  ): Promise<
    | paths["/api/v1/admin/config/field/{property_field_id}"]["put"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.auth.checkAuth())
      return await this.auth.put(`/admin/config/field/${propertyId}`, payload);
  }

  async deleteProperty(
    propertyId: string
  ): Promise<
    | paths["/api/v1/admin/config/field/{property_field_id}"]["delete"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.auth.checkAuth())
      return await this.auth.delete(`/admin/config/field/${propertyId}`);
  }

  // Consumer endpoints
  async getConsumers(): Promise<
    | paths["/api/v1/admin/config/consumers"]["get"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.auth.checkAuth())
      return await this.auth.get(`/admin/config/consumers`);
  }

  async postConsumer(
    payload: paths["/api/v1/admin/config/consumer"]["post"]["requestBody"]["content"]["application/json"]
  ): Promise<
    | paths["/api/v1/admin/config/consumer"]["post"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.auth.checkAuth())
      return await this.auth.post(`/admin/config/consumer`, payload);
  }

  async putConsumer(
    clientId: string,
    payload: paths["/api/v1/admin/config/consumer/{client_id}"]["put"]["requestBody"]["content"]["application/json"]
  ): Promise<
    | paths["/api/v1/admin/config/consumer/{client_id}"]["put"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.auth.checkAuth())
      return await this.auth.put(`/admin/config/consumer/${clientId}`, payload);
  }

  async deleteConsumer(
    clientId: string
  ): Promise<
    | paths["/api/v1/admin/config/consumer/{client_id}"]["delete"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.auth.checkAuth())
      return await this.auth.delete(`/admin/config/consumer/${clientId}`);
  }

  // Config endpoints
  async getConsumerLanguages(
    query: paths["/api/v1/admin/config/languages"]["get"]["parameters"]["query"]
  ): Promise<
    | paths["/api/v1/admin/config/languages"]["get"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.auth.checkAuth())
      return await this.auth.get(`/admin/config/languages`, query);
  }

  async getConsumerCurrencies(
    query: paths["/api/v1/admin/config/currencies"]["get"]["parameters"]["query"]
  ): Promise<
    | paths["/api/v1/admin/config/currencies"]["get"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.auth.checkAuth())
      return await this.auth.get(`/admin/config/currencies`, query);
  }

  async postServiceTypes(
    payload: paths["/api/v1/admin/config/service-types"]["post"]["requestBody"]["content"]["application/json"]
  ): Promise<
    | paths["/api/v1/admin/config/service-types"]["post"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.auth.checkAuth())
      return await this.auth.post(`/admin/config/service-types`, payload);
  }

  async deleteServiceType(
    serviceTypeId: string
  ): Promise<
    | paths["/api/v1/admin/config/service-type/{service_type_id}"]["delete"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.auth.checkAuth())
      return await this.auth.delete(
        `/admin/config/service-type/${serviceTypeId}`
      );
  }

  async postPaymentMethod(
    payload: paths["/api/v1/admin/config/method"]["post"]["requestBody"]["content"]["application/json"]
  ): Promise<
    | paths["/api/v1/admin/config/method"]["post"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.auth.checkAuth())
      return await this.auth.post(`/admin/config/method`, payload);
  }

  // Withdrawal endpoint
  async getWithdrawals(
    query: paths["/api/v1/admin/withdrawals"]["get"]["parameters"]["query"]
  ): Promise<
    | paths["/api/v1/admin/withdrawals"]["get"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.auth.checkAuth())
      return await this.auth.get(`/admin/withdrawals`, query);
  }

  async getWithdrawalsCount(
    query: paths["/api/v1/admin/withdrawals/count"]["get"]["parameters"]["query"]
  ): Promise<
    | paths["/api/v1/admin/withdrawals/count"]["get"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.auth.checkAuth())
      return await this.auth.get(`/admin/withdrawals/count`, query);
  }

  async getWithdrawalDetails(
    withdrawalId: string
  ): Promise<
    | paths["/api/v1/admin/withdrawal/{withdrawal_id}"]["get"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.auth.checkAuth())
      return await this.auth.get(`/admin/withdrawal/${withdrawalId}`);
  }

  async getWithdrawalDownload(
    query: paths["/api/v1/admin/withdrawal/download"]["get"]["parameters"]["query"]
  ): Promise<StretchResponse["FileResponse"] | undefined> {
    if (await this.auth.checkAuth())
      return await this.auth.get(`/admin/withdrawal/download`, query);
  }

  // Analytics endpoint
  async revenueAnalytics(
    query: paths["/api/v1/admin/analytics/revenue"]["get"]["parameters"]["query"]
  ): Promise<
    | paths["/api/v1/admin/analytics/revenue"]["get"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.auth.checkAuth())
      return await this.auth.get("/admin/analytics/revenue", query);
  }

  async revenueChartAnalytics(
    query: paths["/api/v1/admin/analytics/revenue-chart"]["get"]["parameters"]["query"]
  ): Promise<
    | paths["/api/v1/admin/analytics/revenue-chart"]["get"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.auth.checkAuth())
      return await this.auth.get("/admin/analytics/revenue-chart", query);
  }

  async sessionInfoAnalytics(
    query: paths["/api/v1/admin/analytics/session-info"]["get"]["parameters"]["query"]
  ): Promise<
    | paths["/api/v1/admin/analytics/session-info"]["get"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.auth.checkAuth())
      return await this.auth.get("/admin/analytics/session-info", query);
  }

  async totalUserAnalytics(
    query: paths["/api/v1/admin/analytics/users"]["get"]["parameters"]["query"]
  ): Promise<
    | paths["/api/v1/admin/analytics/users"]["get"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.auth.checkAuth())
      return await this.auth.get("/admin/analytics/users", query);
  }

  async bestCoachAnalytics(
    query: paths["/api/v1/admin/analytics/best-users"]["get"]["parameters"]["query"]
  ): Promise<
    | paths["/api/v1/admin/analytics/best-users"]["get"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.auth.checkAuth())
      return await this.auth.get("/admin/analytics/best-users", query);
  }

  async getAnalyticsSummary(
    query: paths["/api/v1/admin/analytics/summary"]["get"]["parameters"]["query"]
  ): Promise<
    | paths["/api/v1/admin/analytics/summary"]["get"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.auth.checkAuth())
      return await this.auth.get("/admin/analytics/summary", query);
  }

  async getCoachAnalyticsSummary(
    coachId: string,
    query: paths["/api/v1/admin/analytics/coach/{coach_id}/summary"]["get"]["parameters"]["query"]
  ): Promise<
    | paths["/api/v1/admin/analytics/coach/{coach_id}/summary"]["get"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.auth.checkAuth())
      return await this.auth.get(
        `/admin/analytics/coach/${coachId}/summary`,
        query
      );
  }

  async getClientAnalyticsSummary(
    clientId: string,
    query: paths["/api/v1/admin/analytics/client/{client_id}/summary"]["get"]["parameters"]["query"]
  ): Promise<
    | paths["/api/v1/admin/analytics/client/{client_id}/summary"]["get"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.auth.checkAuth())
      return await this.auth.get(
        `/admin/analytics/client/${clientId}/summary`,
        query
      );
  }

  async getDashboardAnalytics(): Promise<
    | paths["/api/v1/admin/analytics/dashboard"]["get"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.auth.checkAuth())
      return await this.auth.get(`/admin/analytics/dashboard`);
  }

  // Equipments endpoint
  async getEquipments(
    query: paths["/api/v1/admin/equipments"]["get"]["parameters"]["query"]
  ): Promise<
    | paths["/api/v1/admin/equipments"]["get"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.auth.checkAuth())
      return await this.auth.get(`/admin/equipments`, query);
  }

  async getEquipmentsCount(
    query: paths["/api/v1/admin/equipments/count"]["get"]["parameters"]["query"]
  ): Promise<
    | paths["/api/v1/admin/equipments/count"]["get"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.auth.checkAuth())
      return await this.auth.get(`/admin/equipments/count`, query);
  }

  // Marketing groups endpoint
  async getMarketingGroups(
    query: paths["/api/v1/admin/marketing-groups"]["get"]["parameters"]["query"]
  ): Promise<
    | paths["/api/v1/admin/marketing-groups"]["get"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.auth.checkAuth())
      return await this.auth.get(`/admin/marketing-groups`, query);
  }

  async postMarketingGroup(
    payload: paths["/api/v1/admin/marketing-group"]["post"]["requestBody"]["content"]["application/json"]
  ): Promise<
    | paths["/api/v1/admin/marketing-group"]["post"]["responses"]["201"]["content"]["application/json"]
    | undefined
  > {
    if (await this.auth.checkAuth())
      return await this.auth.post(`/admin/marketing-group`, payload);
  }

  async putMarketingGroup(
    marketingId: string,
    payload: paths["/api/v1/admin/marketing-group/{marketing_id}"]["put"]["requestBody"]["content"]["application/json"]
  ): Promise<
    | paths["/api/v1/admin/marketing-group/{marketing_id}"]["put"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.auth.checkAuth())
      return await this.auth.put(
        `/admin/marketing-group/${marketingId}`,
        payload
      );
  }

  async putMarketingGroupsOrder(
    payload: paths["/api/v1/admin/marketing-groups/order"]["put"]["requestBody"]["content"]["application/json"]
  ): Promise<
    | paths["/api/v1/admin/marketing-groups/order"]["put"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.auth.checkAuth())
      return await this.auth.put(`/admin/marketing-groups/order`, payload);
  }

  async deleteMarketingGroup(
    marketingId: string
  ): Promise<
    | paths["/api/v1/admin/marketing-group/{marketing_id}"]["delete"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.auth.checkAuth())
      return await this.auth.delete(`/admin/marketing-group/${marketingId}`);
  }
}

export default Admin;
