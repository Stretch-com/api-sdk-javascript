import { paths } from "../../types/coach";
import { StretchAuth } from "../common/auth";

class Service {
  _client: StretchAuth;

  constructor(client: StretchAuth) {
    this._client = client;
  }

  async getServiceTypes(): Promise<
    | paths["/api/v1/servicetypes"]["get"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this._client.checkAuth())
      return await this._client.get("/servicetypes");
  }

  async postAvailabilityService(
    serviceId: string,
    payload: paths["/api/v1/service/{service_id}/availability"]["post"]["requestBody"]["content"]["application/json"]
  ): Promise<
    | paths["/api/v1/service/{service_id}/availability"]["post"]["requestBody"]["content"]["application/json"]
    | undefined
  > {
    if (await this._client.checkAuth())
      return await this._client.post(
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
    if (await this._client.checkAuth())
      return await this._client.post(`/service/${serviceId}/check`, payload);
  }

  async getService(
    serviceId: string
  ): Promise<
    | paths["/api/v1/service/{service_id}"]["get"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this._client.checkAuth())
      return await this._client.get(`/service/${serviceId}`);
  }

  async postServiceBooking(
    serviceId: string,
    payload: paths["/api/v1/service/{service_id}"]["post"]["requestBody"]["content"]["application/json"]
  ): Promise<
    | paths["/api/v1/service/{service_id}"]["post"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this._client.checkAuth())
      return await this._client.post(`/service/${serviceId}`, payload);
  }

  async getServiceReviews(
    serviceId: string,
    query: paths["/api/v1/service/{service_id}/reviews"]["get"]["parameters"]["query"]
  ): Promise<
    | paths["/api/v1/service/{service_id}/reviews"]["get"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this._client.checkAuth())
      return await this._client.get(`/service/${serviceId}/reviews`, query);
  }

  async getServiceReviewsInfo(
    serviceId: string
  ): Promise<
    | paths["/api/v1/service/{service_id}/reviews/info"]["get"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this._client.checkAuth())
      return await this._client.get(`/service/${serviceId}/reviews/info`);
  }
}

export default Service;
