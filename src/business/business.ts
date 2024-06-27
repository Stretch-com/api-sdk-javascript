import { paths } from "../../types/coach";
import { StretchAuth } from "../common/auth";

class Business {
  auth: StretchAuth;

  constructor(stretchAuth: StretchAuth) {
    this.auth = stretchAuth;
  }

  async getProfile(): Promise<
    | paths["/api/v1/business/profile"]["get"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.auth.checkAuth())
      return await this.auth.get(`/business/profile`);
  }

  async getBusinessProfile(
    businessId: string
  ): Promise<
    | paths["/api/v1/business/{business_id}/profile"]["get"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.auth.checkAuth())
      return await this.auth.get(`/business/${businessId}/profile`);
  }

  async putProfile(
    payload: paths["/api/v1/business/profile"]["put"]["requestBody"]["content"]["application/json"]
  ): Promise<
    | paths["/api/v1/business/profile"]["put"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.auth.checkAuth())
      return await this.auth.put(`/business/profile`, payload);
  }

  async claimBusiness(
    businessId: string,
    payload: paths["/api/v1/business/{business_id}/claim"]["post"]["requestBody"]["content"]["application/json"]
  ): Promise<
    | paths["/api/v1/business/{business_id}/claim"]["post"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.auth.checkAuth())
      return await this.auth.post(`/business/${businessId}/claim`, payload);
  }

  async getQuestions(
    businessId: string,
    query: paths["/api/v1/business/{business_id}/questions"]["get"]["parameters"]["query"]
  ): Promise<
    | paths["/api/v1/business/{business_id}/questions"]["get"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.auth.checkAuth())
      return await this.auth.get(`/business/${businessId}/questions`, query);
  }

  async getQuestion(
    questionId: string
  ): Promise<
    | paths["/api/v1/business/question/{question_id}"]["get"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.auth.checkAuth())
      return await this.auth.get(`/business/question/${questionId}`);
  }

  async postQuestion(
    questionId: string,
    payload: paths["/api/v1/business/question/{question_id}"]["post"]["requestBody"]["content"]["application/json"]
  ): Promise<
    | paths["/api/v1/business/question/{question_id}"]["post"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.auth.checkAuth())
      return await this.auth.post(`/business/question/${questionId}`, payload);
  }

  async putQuestion(
    questionId: string,
    payload: paths["/api/v1/business/question/{question_id}"]["put"]["requestBody"]["content"]["application/json"]
  ): Promise<
    | paths["/api/v1/business/question/{question_id}"]["put"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.auth.checkAuth())
      return await this.auth.put(`/business/question/${questionId}`, payload);
  }

  async deleteQuestion(
    questionId: string
  ): Promise<
    | paths["/api/v1/business/question/{question_id}"]["delete"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.auth.checkAuth())
      return await this.auth.delete(`/business/question/${questionId}`);
  }
}

export default Business;
