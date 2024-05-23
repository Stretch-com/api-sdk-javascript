import { paths } from "../../types/coach";
import { StretchAuth } from "../common/auth";

class Client extends StretchAuth {
  async getClientPublic(
    clientId: string
  ): Promise<
    | paths["/api/v1/client/{client_id}/public"]["get"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.checkAuth())
      return await this.get(`/client/${clientId}/public`);
  }
}

export default Client;
