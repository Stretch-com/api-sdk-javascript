import { components, paths } from "../../types/auth";
import { apiFetch, apiToken } from "./fetch";
import { StretchBase } from "./requests";

export class StretchAuth extends StretchBase {
  async getConfig(
    clientId: string
  ): Promise<
    | paths["/api/v1/auth/config/{client_id}"]["get"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    return await apiFetch(this.url(`/config/${clientId}`), {
      method: "GET",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
    });
  }

  async login(
    username: string,
    password: string
  ): Promise<
    | paths["/api/v1/auth/token"]["post"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    const scope = "coach";
    const res = await apiToken(
      this.url("/auth/token"),
      username,
      password,
      scope,
      this._clientId
    );

    try {
      this._updateToken(res);
      /* eslint-disable */
    } catch (e: any) {
      console.error(`Fail update storage: ${e.message}`);
    }
    return res;
  }

  async postRefresh(): Promise<
    | paths["/api/v1/auth/refresh"]["post"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.checkAuth()) return await this.post(`/auth/refresh`);
  }

  async postLogout(): Promise<
    | paths["/api/v1/auth/logout"]["post"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.checkAuth()) return await this.post(`/auth/logout`);
  }

  async passwordReset(
    payload: paths["/api/v1/auth/password-reset"]["post"]["requestBody"]["content"]["application/json"]
  ): Promise<
    | paths["/api/v1/auth/password-reset"]["post"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    // const basic = btoa(`${this._clientId}:`);
    const res = await apiFetch(this.url("/auth/password-reset"), {
      method: "POST",
      body: JSON.stringify(payload),
      credentials: "include",
      headers: {
        // Authorization: `Basic ${basic}`,
        "Content-Type": "application/json",
        //'Access-Control-Allow-Credentials': true,
      },
    });

    try {
      this._updateToken(res);
      /* eslint-disable */
    } catch (e: any) {
      console.error(`Fail update storage: ${e.message}`);
    }
    return res;
  }

  async passwordChange(
    payload: paths["/api/v1/auth/password-reset"]["put"]["requestBody"]["content"]["application/json"]
  ): Promise<
    | paths["/api/v1/auth/password-reset"]["put"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.checkAuth())
      return await this.put(`/auth/password-reset`, payload);
  }

  async guest(
    scope: string = "client",
    timezone: string | null = null
  ): Promise<
    | paths["/api/v1/auth/guest"]["post"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    const basic = btoa(`${this._clientId}:`);
    const payload: paths["/api/v1/auth/guest"]["post"]["requestBody"]["content"]["application/json"] =
      { grant_type: "create", timezone, scope };

    const res = await apiFetch(this.url("/auth/guest"), {
      method: "POST",
      body: JSON.stringify(payload),
      credentials: "include",
      headers: {
        Authorization: `Basic ${basic}`,
        "Content-Type": "application/json",
      },
    });

    try {
      this._updateToken(res);
      /* eslint-disable */
    } catch (e: any) {
      console.error(`Fail update storage: ${e.message}`);
    }
    return res;
  }

  async signup(
    phone: string,
    type: components["schemas"]["UserType"] | null = "client",
    timezone: string | null = null
  ): Promise<
    | paths["/api/v1/auth/signup"]["post"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    const basic = btoa(`${this._clientId}:`);
    if (timezone == null) timezone = "Asia/Dubai";
    const payload: paths["/api/v1/auth/signup"]["post"]["requestBody"]["content"]["application/json"] =
      { grant_type: "create", timezone, type, phone };

    const res = await apiFetch(this.url("/auth/signup"), {
      method: "POST",
      body: JSON.stringify(payload),
      credentials: "include",
      headers: {
        Authorization: `Basic ${basic}`,
        "Content-Type": "application/json",
      },
    });

    try {
      this._updateToken(res);
      /* eslint-disable */
    } catch (e: any) {
      console.error(`Fail update storage: ${e.message}`);
    }
    return res;
  }

  async phoneVerify(
    payload: paths["/api/v1/auth/verify/phone"]["post"]["requestBody"]["content"]["application/json"]
  ): Promise<
    | paths["/api/v1/auth/verify/phone"]["post"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.checkAuth()) {
      if (!payload.channel) payload.channel = "sms";
      return await this.post("/auth/verify/phone", payload);
    }
  }

  async phoneCheck(
    payload: paths["/api/v1/auth/verify/phone"]["put"]["requestBody"]["content"]["application/json"]
  ): Promise<
    | paths["/api/v1/auth/verify/phone"]["put"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.checkAuth())
      return await this.put("/auth/verify/phone", payload);
  }

  async emailVerify(
    query: paths["/api/v1/auth/verify/email"]["get"]["parameters"]["query"]
  ): Promise<
    | paths["/api/v1/auth/verify/email"]["get"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    const res = await this.get("/auth/verify/email", query);
    try {
      if (res) this._updateToken(res);
      /* eslint-disable */
    } catch (e: any) {
      console.error(`Fail update storage: ${e.message}`);
    }
    return res;
  }

  async postEmailVerify(
    payload: paths["/api/v1/auth/verify/email"]["post"]["requestBody"]["content"]["application/json"]
  ): Promise<
    | paths["/api/v1/auth/verify/email"]["post"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.checkAuth())
      return await this.post("/auth/verify/email", payload);
  }

  async emailCheck(
    payload: paths["/api/v1/auth/verify/email"]["put"]["requestBody"]["content"]["application/json"]
  ): Promise<
    | paths["/api/v1/auth/verify/email"]["put"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.checkAuth())
      return await this.put("/auth/verify/email", payload);
  }

  async verifyRegistration(
    payload: paths["/api/v1/auth/validate"]["post"]["requestBody"]["content"]["application/json"]
  ): Promise<
    | paths["/api/v1/auth/validate"]["post"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.checkAuth())
      return await this.post("/auth/validate", payload);
  }

  async signupComplete(
    payload: paths["/api/v1/auth/complete"]["put"]["requestBody"]["content"]["application/json"]
  ): Promise<
    | paths["/api/v1/auth/complete"]["put"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.checkAuth()) {
      const res = await this.put("/auth/complete", payload);
      try {
        this._updateToken(res);
        /* eslint-disable */
      } catch (e: any) {
        console.error(`Fail update storage: ${e.message}`);
      }
      return res;
    }
  }

  async getUser(): Promise<
    | paths["/api/v1/auth/user"]["get"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.checkAuth()) return await this.get("/auth/user");
  }

  async putUser(
    payload: paths["/api/v1/auth/user"]["put"]["requestBody"]["content"]["application/json"]
  ): Promise<
    | paths["/api/v1/auth/user"]["put"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.checkAuth()) return await this.put("/auth/user", payload);
  }

  async deleteUser(
    query: paths["/api/v1/auth/user"]["delete"]["parameters"]["query"]
  ): Promise<
    | paths["/api/v1/auth/user"]["delete"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.checkAuth()) return await this.delete("/auth/user", query);
  }
}
