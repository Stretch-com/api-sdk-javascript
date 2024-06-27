import { paths } from "../../types/coach";
import { StretchAuth } from "../common/auth";

class Client {
  auth: StretchAuth;

  constructor(stretchAuth: StretchAuth) {
    this.auth = stretchAuth;
  }

  async getClientPublic(
    clientId: string
  ): Promise<
    | paths["/api/v1/client/{client_id}/public"]["get"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.auth.checkAuth())
      return await this.auth.get(`/client/${clientId}/public`);
  }
}

export default Client;
