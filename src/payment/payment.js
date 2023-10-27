class Payment {
  constructor(client) {
    this._client = client;
  }

  async getWalletInfo(query = {}) {
    if (await this._client.checkAuth())
      return await this._client.get(`/payment/wallet/info`, query);
  }
}

export default Payment;
