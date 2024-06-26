import { paths } from "../../types/coach";
import { StretchAuth } from "../common/auth";

class Service {
  auth: StretchAuth;

  constructor(stretchAuth: StretchAuth) {
    this.auth = stretchAuth;
  }

  async getServiceTypes(): Promise<
    | paths["/api/v1/servicetypes"]["get"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.auth.checkAuth())
      return await this.auth.get("/servicetypes");
  }

  async postAvailabilityService(
    serviceId: string,
    payload: paths["/api/v1/service/{service_id}/availability"]["post"]["requestBody"]["content"]["application/json"]
  ): Promise<
    | paths["/api/v1/service/{service_id}/availability"]["post"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.auth.checkAuth())
      return await this.auth.post(
        `/service/${serviceId}/availability`,
        payload
      );
  }

  async postServiceCheck(
    serviceId: string,
    payload: paths["/api/v1/service/{service_id}/check"]["post"]["requestBody"]["content"]["application/json"]
  ): Promise<
    | paths["/api/v1/service/{service_id}/check"]["post"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.auth.checkAuth())
      return await this.auth.post(`/service/${serviceId}/check`, payload);
  }

  async getService(
    serviceId: string
  ): Promise<
    | paths["/api/v1/service/{service_id}"]["get"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.auth.checkAuth())
      return await this.auth.get(`/service/${serviceId}`);
  }

  async postServiceBooking(
    serviceId: string,
    payload: paths["/api/v1/service/{service_id}"]["post"]["requestBody"]["content"]["application/json"]
  ): Promise<
    | paths["/api/v1/service/{service_id}"]["post"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.auth.checkAuth())
      return await this.auth.post(`/service/${serviceId}`, payload);
  }

  async getServiceReviews(
    serviceId: string,
    query: paths["/api/v1/service/{service_id}/reviews"]["get"]["parameters"]["query"]
  ): Promise<
    | paths["/api/v1/service/{service_id}/reviews"]["get"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.auth.checkAuth())
      return await this.auth.get(`/service/${serviceId}/reviews`, query);
  }

  async getServiceReviewsInfo(
    serviceId: string
  ): Promise<
    | paths["/api/v1/service/{service_id}/reviews/info"]["get"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.auth.checkAuth())
      return await this.auth.get(`/service/${serviceId}/reviews/info`);
  }
}

export default Service;
