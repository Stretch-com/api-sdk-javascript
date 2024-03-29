export class Auth {
  constructor(client) {
    this._client = client;
  }

  async getUser() {
    if (await this._client.checkAuth())
      return await this._client.get(`/auth/user`);
  }

  async putUser(payload = {}) {
    if (await this._client.checkAuth())
      return await this._client.put(`/auth/user`, payload);
  }

  async dropUser(query = {}) {
    if (await this._client.checkAuth())
      return await this._client.delete(`/auth/user`, query);
  }

  async putPasswordReset(payload = {}) {
    if (await this._client.checkAuth())
      return await this._client.put(`/auth/password-reset`, payload);
  }

  async postPasswordReset(payload = {}) {
    if (await this._client.checkAuth())
      return await this._client.post(`/auth/password-reset`, payload);
  }

  async getLanguages() {
    if (await this._client.checkAuth())
      return await this._client.get(`/auth/user/languages`);
  }
}

export default Auth;
