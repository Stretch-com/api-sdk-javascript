import { StretchError } from "./error.js";
import { apiFetch } from "./fetch.js";

export class StretchBase {
  _clientId = null;
  _apiUrl = null;
  _apiBase = "/api/v1";

  #accessToken = null;
  #userId = null;
  #refreshToken = null;
  #tokenType = "Bearer";
  #accessExpireDate = new Date();
  #refreshExpireDate = new Date();

  constructor(
    clientId,
    // apiUrl = "http://localhost:8000",
    apiUrl = "https://stage.stretch.com",
    apiBase = "/api/v1"
  ) {
    this._clientId = clientId;
    this._apiUrl = apiUrl;
    this._apiBase = apiBase;
    //this._apiBase = `${apiUrl}${apiBase}`
  }

  user(userId = null) {
    this.#userId = userId;
    return this;
  }

  url(uri, query = null) {
    let lurl = new URL(`${this._apiBase}${uri}`, this._apiUrl);
    if (query != null) lurl.search = new URLSearchParams(query).toString();
    return lurl;
  }

  async postForm(uri, body) {
    let headers = {
      Authorization: `${this.#tokenType} ${this.#accessToken}`,
    };
    if (this.#userId) {
      headers["Authorization-User"] = this.#userId;
      this.#userId = null;
    }
    return await apiFetch(this.url(uri), {
      method: "POST",
      credentials: "include",
      body: body,
      headers: headers,
    });
  }

  async post(uri, payload = {}) {
    let headers = {
      Authorization: `${this.#tokenType} ${this.#accessToken}`,
      "Content-Type": "application/json",
    };
    if (this.#userId) {
      headers["Authorization-User"] = this.#userId;
      this.#userId = null;
    }
    if (payload)
      payload = Object.keys(payload)
        .filter((k) => payload[k] !== null)
        .reduce((a, k) => ({ ...a, [k]: payload[k] }), {});

    return await apiFetch(this.url(uri), {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(payload ? payload : {}),
      headers: headers,
    });
  }

  async putForm(uri, body, contentType = "multipart/form-data") {
    let headers = {
      Authorization: `${this.#tokenType} ${this.#accessToken}`,
      "Content-Type": contentType,
    };
    if (this.#userId) {
      headers["Authorization-User"] = this.#userId;
      this.#userId = null;
    }
    return await apiFetch(this.url(uri), {
      method: "PUT",
      credentials: "include",
      body: body,
      headers: headers,
    });
  }

  async put(uri, payload = {}) {
    let headers = {
      Authorization: `${this.#tokenType} ${this.#accessToken}`,
      "Content-Type": "application/json",
    };
    if (this.#userId) {
      headers["Authorization-User"] = this.#userId;
      this.#userId = null;
    }

    if (payload)
      payload = Object.keys(payload)
        .filter((k) => payload[k] !== null)
        .reduce((a, k) => ({ ...a, [k]: payload[k] }), {});

    return await apiFetch(this.url(uri), {
      method: "PUT",
      credentials: "include",
      body: JSON.stringify(payload ? payload : {}),
      headers: headers,
    });
  }

  async get(uri, query = null) {
    let headers = {
      Authorization: `${this.#tokenType} ${this.#accessToken}`,
      "Content-Type": "application/json",
    };
    if (this.#userId) {
      headers["Authorization-User"] = this.#userId;
      this.#userId = null;
    }

    if (query)
      query = Object.keys(query)
        .filter((k) => query[k] !== null)
        .reduce((a, k) => ({ ...a, [k]: query[k] }), {});

    return await apiFetch(this.url(uri, query), {
      method: "GET",
      credentials: "include",
      headers: headers,
    });
  }

  async delete(uri, query = null) {
    let headers = {
      Authorization: `${this.#tokenType} ${this.#accessToken}`,
    };
    if (this.#userId) {
      headers["Authorization-User"] = this.#userId;
      this.#userId = null;
    }
    return await apiFetch(this.url(uri), {
      method: "DELETE",
      credentials: "include",
      headers: headers,
    });
  }

  _updateToken(res) {
    let storageExists;

    try {
      localStorage.getItem("access_token");
      storageExists = true;
    } catch (e) {
      console.error("LocalStorage in current context not exists");
      storageExists = false;
    }

    if (res.hasOwnProperty("access_token")) {
      this.#accessToken = res["access_token"];
      if (storageExists)
        localStorage.setItem("access_token", res["access_token"]);
    }

    if (res.hasOwnProperty("refresh_token")) {
      this.#refreshToken = res["refresh_token"];
      if (storageExists)
        localStorage.setItem("refresh_token", res["refresh_token"]);
    }

    if (res.hasOwnProperty("token_type")) {
      this.#tokenType = res["token_type"];
      if (storageExists) localStorage.setItem("token_type", res["token_type"]);
    }

    if (res.hasOwnProperty("access_expire")) {
      let currentTime = new Date();
      currentTime.setSeconds(
        currentTime.getSeconds() + res["access_expire"] - 10
      );
      this.#accessExpireDate = currentTime;

      if (storageExists)
        localStorage.setItem("access_expire_date", currentTime);
    }

    if (res.hasOwnProperty("refresh_expire")) {
      let currentTime = new Date();
      currentTime.setSeconds(
        currentTime.getSeconds() + res["refresh_expire"] - 60
      );

      this.#refreshExpireDate = currentTime;
      if (storageExists)
        localStorage.setItem("refresh_expire_date", currentTime);
    }

    return res;
  }

  async refresh() {
    let storageExists;
    let refreshToken = null;

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
    } catch (e) {
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
        this.#accessExpireDate = new Date(
          Date.parse(localStorage.getItem("access_expire_date"))
        );
      }

      if (this.#refreshToken == null) {
        this.#refreshToken = localStorage.getItem("refresh_token");
        this.#refreshExpireDate = new Date(
          Date.parse(localStorage.getItem("refresh_expire_date"))
        );
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
