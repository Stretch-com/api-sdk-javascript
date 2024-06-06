import { paths } from "../../types/coach";
import { StretchAuth } from "../common/auth";

export class Search extends StretchAuth {
  async search(
    payload: paths["/api/v1/search"]["post"]["requestBody"]["content"]["application/json"]
  ) {
    return await this.postSearch(payload);
  }

  async count(
    payload: paths["/api/v1/search/count"]["post"]["requestBody"]["content"]["application/json"]
  ) {
    return await this.postCount(payload);
  }

  async filter(
    query: paths["/api/v1/search/filter"]["get"]["parameters"]["query"]
  ) {
    return await this.getFilter(query);
  }

  async postSearch(
    payload: paths["/api/v1/search"]["post"]["requestBody"]["content"]["application/json"]
  ): Promise<
    | paths["/api/v1/search"]["post"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.checkAuth()) return await this.post(`/search`, payload);
  }

  async postCount(
    payload: paths["/api/v1/search/count"]["post"]["requestBody"]["content"]["application/json"]
  ): Promise<
    | paths["/api/v1/search/count"]["post"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.checkAuth())
      return await this.post(`/search/count`, payload);
  }

  async getFilter(
    query: paths["/api/v1/search/filter"]["get"]["parameters"]["query"]
  ): Promise<
    | paths["/api/v1/search/filter"]["get"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.checkAuth()) return await this.get(`/search/filter`, query);
  }
}

export default Search;