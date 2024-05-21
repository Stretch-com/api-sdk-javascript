import { apiFetch, apiToken } from "./fetch.js";
import { StretchBase } from "./requests.js";

export class StretchAuth extends StretchBase {
  async login(username: string, password: string) {
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
    } catch (e) {
      console.error(`Fail update storage: ${e.message}`);
    }
    return res;
  }

  async guest(type: string = "client", timezone: string | null = null) {
    const basic = btoa(`${this._clientId}:`);
    const payload = {
      grant_type: "create",
      timezone: timezone,
      type: type,
    };

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
    type: string = "client",
    timezone: string | null = null
  ) {
    const basic = btoa(`${this._clientId}:`);
    if (timezone == null) timezone = "Asia/Dubai";
    const payload = {
      grant_type: "create",
      timezone: timezone,
      type: type,
      phone: phone,
    };

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

  async phoneVerify(session: string, channel = "sms") {
    if (await this.checkAuth()) {
      const payload: Object = {
        session: session,
        channel: channel,
      };
      return await this.post("/auth/verify/phone", payload);
    }
  }

  async phoneCheck(sid: string, code: string) {
    if (await this.checkAuth()) {
      const payload = {
        sid: sid,
        code: code,
      };

      return await this.put("/auth/verify/phone", payload);
    }
  }

  async emailVerify(code) {
    const payload = { code };
    const res = await this.get("/auth/verify/email", payload);
    try {
      if (res) this._updateToken(res);
    } catch (e) {
      console.error(`Fail update storage: ${e.message}`);
    }
    return res;
  }

  async signupComplete(
    password: string,
    firstName: string | null = null,
    lastName: string | null = null,
    gender: string | null = null,
    email: string | null = null,
    username: string | null = null
  ) {
    if (await this.checkAuth()) {
      const payload = { password };
      if (firstName) payload["firstName"] = firstName;
      if (lastName) payload["lastName"] = lastName;
      if (gender) payload["gender"] = gender;
      if (email) payload["email"] = email;
      if (username) payload["username"] = username;

      const res = await this.put("/auth/complete", payload);
      try {
        this._updateToken(res);
      } catch (e) {
        console.error(`Fail update storage: ${e.message}`);
      }
      return res;
    }
  }

  async passwordReset(
    phone: string | null = null,
    email: string | null = null,
    client_id: string = "2f9445b3-5266-45cd-8a85-d5c3fff69781",
    client_secret: string | null = null
  ) {
    // const basic = btoa(`${this._clientId}:`);
    const payload = { grant_type: "reset", client_id };
    if (phone) payload["phone"] = phone;
    else if (email) payload["email"] = email;
    else if (client_secret) payload["client_secret"] = client_secret;

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

  async passwordChange(password: string) {
    if (await this.checkAuth()) {
      const payload = {
        password: password,
      };
      const res = await this.put("/auth/password-reset", payload);
      try {
        this._updateToken(res);
      } catch (e) {
        console.error(`Fail update storage: ${e.message}`);
      }
      return res;
    }
  }
}
