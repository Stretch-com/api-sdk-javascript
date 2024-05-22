import { paths } from "../../types/coach";
import { StretchAuth } from "../common/auth";

class Client {
  _client: StretchAuth;

  constructor(client: StretchAuth) {
    this._client = client;
  }

  async getClientPublic(
    clientId: string
  ): Promise<
    | paths["/api/v1/client/{client_id}/public"]["get"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this._client.checkAuth())
      return await this._client.get(`/client/${clientId}/public`);
  }
}

export default Client;
