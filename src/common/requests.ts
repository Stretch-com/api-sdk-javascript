import { paths } from "../../types/auth";
import { StretchError } from "./error";
import { apiFetch } from "./fetch";

export class StretchBase {
  _clientId?: string = undefined;
  _apiUrl?: string | URL = undefined;
  _apiBase = "/api/v1";

  #accessToken: string | null = null;
  #userId: string | null = null;
  #refreshToken: string | null = null;
  #tokenType = "Bearer";
  #accessExpireDate = new Date();
  #refreshExpireDate = new Date();

  constructor(
    clientId: string,
    apiUrl = "https://stage.stretch.com",
    apiBase = "/api/v1"
  ) {
    this._clientId = clientId;
    this._apiUrl = apiUrl;
    this._apiBase = apiBase;
    //this._apiBase = `${apiUrl}${apiBase}`
  }

  userBase(userId = null) {
    this.#userId = userId;
    return this;
  }

  url<T>(uri: string, query: T | null = null) {
    const lurl = new URL(`${this._apiBase}${uri}`, this._apiUrl);
    if (query != null) lurl.search = new URLSearchParams(query).toString();
    return lurl;
  }

  /* eslint-disable */
  cleanPayload(payload: any) {
    if (payload && !Array.isArray(payload)) {
      payload = Object.keys(payload)
        .filter((k) => payload[k] !== null)
        .reduce((a, k) => ({ ...a, [k]: payload[k] }), {});
    }

    return payload;
  }

  async get<T>(
    uri: string,
    query: T | null = null,
    contentType: string | null = "application/json"
  ) {
    const headers: HeadersInit = {
      Authorization: `${this.#tokenType} ${this.#accessToken}`,
    };
    if (contentType) headers["Content-Type"] = contentType;

    if (this.#userId) {
      headers["Authorization-User"] = this.#userId;
      // this.#userId = null;
    }

    query = this.cleanPayload(query);
    return await apiFetch(this.url(uri, query), {
      method: "GET",
      credentials: "include",
      headers,
    });
  }

  async post(uri: string, payload?: object, contentType = "application/json") {
    const headers: HeadersInit = {
      Authorization: `${this.#tokenType} ${this.#accessToken}`,
    };
    if (contentType) {
      headers["Content-Type"] = contentType;
      payload = this.cleanPayload(payload);
    }

    if (this.#userId) {
      headers["Authorization-User"] = this.#userId;
      // this.#userId = null;
    }

    return await apiFetch(this.url(uri), {
      method: "POST",
      credentials: "include",
      body: contentType ? JSON.stringify(payload) : (payload as BodyInit),
      headers,
    });
  }

  async put(uri: string, payload?: object, contentType = "application/json") {
    const headers: HeadersInit = {
      Authorization: `${this.#tokenType} ${this.#accessToken}`,
    };
    if (contentType) {
      headers["Content-Type"] = contentType;
      payload = this.cleanPayload(payload);
    }

    if (this.#userId) {
      headers["Authorization-User"] = this.#userId;
      // this.#userId = null;
    }

    return await apiFetch(this.url(uri), {
      method: "PUT",
      credentials: "include",
      body: contentType ? JSON.stringify(payload) : (payload as BodyInit),
      headers,
    });
  }

  async delete<T>(
    uri: string,
    query: T | null = null,
    body: object | null = null
  ) {
    const headers: HeadersInit = {
      Authorization: `${this.#tokenType} ${this.#accessToken}`,
    };

    if (this.#userId) {
      headers["Authorization-User"] = this.#userId;
      // this.#userId = null;
    }

    query = this.cleanPayload(query);
    return await apiFetch(this.url(uri, query), {
      method: "DELETE",
      credentials: "include",
      body: body as BodyInit,
      headers,
    });
  }

  _updateToken(
    res: paths["/api/v1/auth/token"]["post"]["responses"]["200"]["content"]["application/json"]
  ) {
    let storageExists;

    try {
      localStorage.getItem("access_token");
      storageExists = true;
    } catch (e) {
      console.error("LocalStorage in current context not exists");
      storageExists = false;
    }

    if (
      Object.prototype.hasOwnProperty.call(res, "access_token") &&
      res.access_token
    ) {
      this.#accessToken = res["access_token"];
      if (storageExists)
        localStorage.setItem("access_token", res["access_token"]);
    }

    if (
      Object.prototype.hasOwnProperty.call(res, "refresh_token") &&
      res.refresh_token
    ) {
      this.#refreshToken = res["refresh_token"];
      if (storageExists)
        localStorage.setItem("refresh_token", res["refresh_token"]);
    }

    if (
      Object.prototype.hasOwnProperty.call(res, "token_type") &&
      res.token_type
    ) {
      this.#tokenType = res["token_type"];
      if (storageExists) localStorage.setItem("token_type", res["token_type"]);
    }

    if (
      Object.prototype.hasOwnProperty.call(res, "access_expire") &&
      res.access_expire
    ) {
      const currentTime = new Date();
      currentTime.setSeconds(
        currentTime.getSeconds() + res["access_expire"] - 10
      );
      this.#accessExpireDate = currentTime;

      if (storageExists)
        localStorage.setItem("access_expire_date", currentTime.toTimeString());
    }

    if (
      Object.prototype.hasOwnProperty.call(res, "refresh_expire") &&
      res.refresh_expire
    ) {
      const currentTime = new Date();
      currentTime.setSeconds(
        currentTime.getSeconds() + res["refresh_expire"] - 60
      );

      this.#refreshExpireDate = currentTime;
      if (storageExists)
        localStorage.setItem("refresh_expire_date", currentTime.toTimeString());
    }

    return res;
  }

  async refresh() {
    let storageExists;
    let refreshToken: string | null = null;

    try {
      localStorage.getItem("access_token");
      storageExists = true;
    } catch (e) {
      console.error("LocalStorage in current context not exists");
      storageExists = false;
    }

    if (storageExists) refreshToken = localStorage.getItem("");
    if (refreshToken == null) refreshToken = this.#refreshToken;
    if (refreshToken == null) {
      console.error("Refresh token not set");
      throw new StretchError(401, "Refresh token error");
    }

    const res = await apiFetch(this.url("/auth/refresh"), {
      method: "POST",
      credentials: "include",
      headers: {
        Authorization: `${this.#tokenType} ${refreshToken}`,
      },
    });
    return this._updateToken(res);
  }

  async loginAsGuest() {
    const basic = btoa(`${this._clientId}:`);
    const payload = {
      grant_type: "create",
      timezone: "Asia/Dubai",
    };

    const res = await apiFetch(this.url("/auth/guest"), {
      method: "POST",
      body: JSON.stringify(payload),
      credentials: "include",
      headers: {
        Authorization: `Basic ${basic}`,
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

  async logout() {
    this.#accessToken = null;
    this.#refreshToken = null;
    this.#userId = null;
    this.#accessExpireDate = new Date();
    this.#refreshExpireDate = new Date();

    try {
      localStorage.removeItem("access_token");
      localStorage.removeItem("access_expire_date");
      localStorage.removeItem("refresh_token");
      localStorage.removeItem("refresh_expire_date");
    } catch (e) {
      console.error(`LocalStorage in current context not exists ${e}`);
    }
  }

  isLogin() {
    try {
      if (this.#accessToken == null) {
        this.#accessToken = localStorage.getItem("access_token");
        const accessExpireDate = localStorage.getItem("access_expire_date");
        if (accessExpireDate)
          this.#accessExpireDate = new Date(parseInt(accessExpireDate));
      }

      if (this.#refreshToken == null) {
        this.#refreshToken = localStorage.getItem("refresh_token");
        const refreshExpireDate = localStorage.getItem("refresh_expire_date");
        if (refreshExpireDate)
          this.#refreshExpireDate = new Date(parseInt(refreshExpireDate));
      }
    } catch (e) {
      console.error(`LocalStorage in current context not exists ${e}`);
    }

    if (this.#accessToken != null) {
      return true;
    }
    return false;
  }

  async checkAuth() {
    if (this.isLogin()) {
      if (this.#accessExpireDate instanceof Date) {
        const current_date = new Date();
        if (current_date.getTime() > this.#accessExpireDate.getTime()) {
          if (
            this.#refreshToken != null &&
            current_date.getTime() < this.#refreshExpireDate.getTime()
          ) {
            await this.refresh();
          } else {
            await this.loginAsGuest();
          }
        }
        return true;
      }
    }
    throw new StretchError(401, "Unauthorized");
  }
}
