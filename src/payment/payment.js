class Payment {
  constructor(client) {
    this._client = client;
  }

  async getWalletInfo(query = {}) {
    if (await this._client.checkAuth())
      return await this._client.get(`/payment/wallet/info`, query);
  }

  async getMethods(query = {}) {
    if (await this._client.checkAuth())
      return await this._client.get(`/payment/methods`, query);
  }

  async putWallet(walletId, query = {}) {
    if (await this._client.checkAuth())
      return await this._client.put(`/payment/wallet/${walletId}`, query);
  }

  async deleteWallet(walletId) {
    if (await this._client.checkAuth())
      return await this._client.delete(`/payment/wallet/${walletId}`);
  }

  async getAvailableBalance() {
    if (await this._client.checkAuth())
      return await this._client.get(`/payment/config/balance`);
  }

  async;
}

export default Payment;
