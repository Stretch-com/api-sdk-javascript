import { components, operations } from "../../types/auth.js";
import { apiFetch, apiToken } from "./fetch.js";
import { StretchBase } from "./requests.js";

export class StretchAuth extends StretchBase {
  async getConfig(
    clientId: string
  ): Promise<components["schemas"]["AppConfigOut"] | undefined> {
    return await apiFetch(this.url(`/config/${clientId}`), {
      method: "GET",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
    });
  }

  async login(
    username: string,
    password: string
  ): Promise<components["schemas"]["Token"]> {
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
    } catch (e: any) {
      console.error(`Fail update storage: ${e.message}`);
    }
    return res;
  }

  async postRefresh(): Promise<components["schemas"]["Token"] | undefined> {
    if (await this.checkAuth()) return await this.post(`/auth/refresh`);
  }

  async logout() {
    if (await this.checkAuth()) return await this.post(`/auth/logout`);
  }

  async passwordReset(
    payload: operations["password_reset_api_v1_auth_password_reset_post"]["requestBody"]["content"]["application/json"]
  ): Promise<components["schemas"]["UserSignupOut"] | undefined> {
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
    } catch (e) {
      console.error(`Fail update storage: ${e.message}`);
    }
    return res;
  }

  async passwordChange(
    payload: operations["complete_password_reset_api_v1_auth_password_reset_put"]["requestBody"]["content"]["application/json"]
  ): Promise<components["schemas"]["Token"] | undefined> {
    if (await this.checkAuth())
      return await this.put(`/auth/password-reset`, payload);
  }

  async guest(
    scope: string = "client",
    timezone: string | null = null
  ): Promise<components["schemas"]["UserSignupOut"] | undefined> {
    const basic = btoa(`${this._clientId}:`);
    const payload: operations["signup_guest_post_api_v1_auth_guest_post"]["requestBody"]["content"]["application/json"] =
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
    } catch (e) {
      console.error(`Fail update storage: ${e.message}`);
    }
    return res;
  }

  async signup(
    phone: string,
    type: components["schemas"]["UserType"] | null = "client",
    timezone: string | null = null
  ): Promise<components["schemas"]["UserSignupOut"] | undefined> {
    const basic = btoa(`${this._clientId}:`);
    if (timezone == null) timezone = "Asia/Dubai";
    const payload: operations["signup_api_v1_auth_signup_post"]["requestBody"]["content"]["application/json"] =
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
    } catch (e) {
      console.error(`Fail update storage: ${e.message}`);
    }
    return res;
  }

  async phoneVerify(
    payload: operations["verify_phone_api_v1_auth_verify_phone_post"]["requestBody"]["content"]["application/json"]
  ): Promise<components["schemas"]["MobileOut"] | undefined> {
    if (await this.checkAuth()) {
      if (!payload.channel) payload.channel = "sms";
      return await this.post("/auth/verify/phone", payload);
    }
  }

  async phoneCheck(
    payload: operations["verify_phone_code_api_v1_auth_verify_phone_put"]["requestBody"]["content"]["application/json"]
  ): Promise<components["schemas"]["MobileCodeOut"] | undefined> {
    if (await this.checkAuth())
      return await this.put("/auth/verify/phone", payload);
  }

  async emailVerify(
    query: operations["check_verify_email_api_v1_auth_verify_email_get"]["parameters"]["query"]
  ) {
    const res = await this.get("/auth/verify/email", query);
    try {
      if (res) this._updateToken(res);
    } catch (e) {
      console.error(`Fail update storage: ${e.message}`);
    }
    return res;
  }

  async postEmailVerify(
    payload: operations["verify_email_api_v1_auth_verify_email_post"]["requestBody"]["content"]["application/json"]
  ): Promise<components["schemas"]["EmailOut"] | undefined> {
    if (await this.checkAuth())
      return await this.post("/auth/verify/email", payload);
  }

  async emailCheck(
    payload: operations["verify_email_code_api_v1_auth_verify_email_put"]["requestBody"]["content"]["application/json"]
  ) {
    if (await this.checkAuth())
      return await this.put("/auth/verify/email", payload);
  }

  async verifyRegistration(
    payload: operations["validate_user_registration_api_v1_auth_validate_post"]["requestBody"]["content"]["application/json"]
  ): Promise<components["schemas"]["StretchResponse"] | undefined> {
    if (await this.checkAuth())
      return await this.post("/auth/validate", payload);
  }

  async signupComplete(
    payload: operations["complete_user_registration_api_v1_auth_complete_put"]["requestBody"]["content"]["application/json"]
  ): Promise<
    | components["schemas"]["Token"]
    | components["schemas"]["StretchResponse"]
    | undefined
  > {
    if (await this.checkAuth()) {
      const res = await this.put("/auth/complete", payload);
      try {
        this._updateToken(res);
      } catch (e) {
        console.error(`Fail update storage: ${e.message}`);
      }
      return res;
    }
  }

  async getUser(): Promise<
    components["schemas"]["UserProfileOut"] | undefined
  > {
    if (await this.checkAuth()) return await this.get("/auth/user");
  }

  async putUser(
    payload: operations["put_user_info_api_v1_auth_user_put"]["requestBody"]["content"]["application/json"]
  ): Promise<components["schemas"]["UserProfileOut"] | undefined> {
    if (await this.checkAuth()) return await this.put("/auth/user", payload);
  }

  async deleteUser(
    query: operations["drop_user_api_v1_auth_user_delete"]["parameters"]["query"]
  ) {
    if (await this.checkAuth()) return await this.delete("/auth/user", query);
  }
}
