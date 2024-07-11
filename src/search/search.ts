import { paths } from "../../types/coach";
import { StretchAuth } from "../common/auth";

export class Search {
  auth: StretchAuth;

  constructor(stretchAuth: StretchAuth) {
    this.auth = stretchAuth;
  }

  async postSearch(
    payload: paths["/api/v1/search"]["post"]["requestBody"]["content"]["application/json"]
  ): Promise<
    | paths["/api/v1/search"]["post"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.auth.checkAuth())
      return await this.auth.post(`/search`, payload);
  }

  async postCount(
    payload: paths["/api/v1/search/count"]["post"]["requestBody"]["content"]["application/json"]
  ): Promise<
    | paths["/api/v1/search/count"]["post"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.auth.checkAuth())
      return await this.auth.post(`/search/count`, payload);
  }

  async getFilter(
    query: paths["/api/v1/search/filter"]["get"]["parameters"]["query"] = {}
  ): Promise<
    | paths["/api/v1/search/filter"]["get"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.auth.checkAuth())
      return await this.auth.get(`/search/filter`, query);
  }

  async postBusinessSearch(
    payload: paths["/api/v1/search/business"]["post"]["requestBody"]["content"]["application/json"]
  ): Promise<
    | paths["/api/v1/search/business"]["post"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.auth.checkAuth())
      return await this.auth.post(`/search/business`, payload);
  }

  async postBusinessCount(
    payload: paths["/api/v1/search/business/count"]["post"]["requestBody"]["content"]["application/json"]
  ): Promise<
    | paths["/api/v1/search/business/count"]["post"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.auth.checkAuth())
      return await this.auth.post(`/search/business/count`, payload);
  }

  async getBusinessFilter(
    query: paths["/api/v1/search/business/filter"]["get"]["parameters"]["query"] = {}
  ): Promise<
    | paths["/api/v1/search/business/filter"]["get"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.auth.checkAuth())
      return await this.auth.get(`/search/business/filter`, query);
  }
}

export default Search;
