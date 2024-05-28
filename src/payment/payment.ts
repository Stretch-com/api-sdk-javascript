import { paths } from "../../types/payment";
import { StretchAuth } from "../common/auth";

class Payment extends StretchAuth {
  async getPayments(
    query: paths["/api/v1/payments"]["get"]["parameters"]["query"]
  ): Promise<
    | paths["/api/v1/payments"]["get"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.checkAuth()) return await this.get(`/payments`, query);
  }

  async getMethods(
    query: paths["/api/v1/payment/methods"]["get"]["parameters"]["query"]
  ): Promise<
    | paths["/api/v1/payment/methods"]["get"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.checkAuth()) return await this.get(`/payment/method`, query);
  }

  async getPaymentCheckout(
    paymentId: string
  ): Promise<
    | paths["/api/v1/payment/checkout/{payment_id}"]["get"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.checkAuth())
      return await this.get(`/payment/checkout/${paymentId}`);
  }

  async postPaymentCheckout(
    paymentId: string,
    payload: paths["/api/v1/payment/checkout/{payment_id}"]["post"]["requestBody"]["content"]["application/json"]
  ): Promise<
    | paths["/api/v1/payment/checkout/{payment_id}"]["post"]["responses"]["201"]["content"]["application/json"]
    | undefined
  > {
    if (await this.checkAuth())
      return await this.post(`/payment/checkout/${paymentId}`, payload);
  }

  async getWallets(): Promise<
    | paths["/api/v1/payment/wallets"]["get"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.checkAuth()) return await this.get(`/payment/wallets`);
  }

  async getWalletInfo(
    query: paths["/api/v1/payment/wallet/info"]["get"]["parameters"]["query"]
  ): Promise<
    | paths["/api/v1/payment/wallet/info"]["get"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.checkAuth())
      return await this.get(`/payment/wallet/info`, query);
  }

  async postWallet(
    payload: paths["/api/v1/payment/wallet"]["post"]["requestBody"]["content"]["application/json"]
  ): Promise<
    | paths["/api/v1/payment/wallet"]["post"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.checkAuth())
      return await this.post(`/payment/wallet`, payload);
  }

  async putWallet(
    walletId: string,
    query: paths["/api/v1/payment/wallet/{wallet_id}"]["put"]["requestBody"]["content"]["application/json"]
  ): Promise<
    | paths["/api/v1/payment/wallet/{wallet_id}"]["put"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.checkAuth())
      return await this.put(`/payment/wallet/${walletId}`, query);
  }

  async deleteWallet(
    walletId: string
  ): Promise<
    | paths["/api/v1/payment/wallet/{wallet_id}"]["delete"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.checkAuth())
      return await this.delete(`/payment/wallet/${walletId}`);
  }

  async getKyc(): Promise<
    | paths["/api/v1/payment/kyc/stripe/account"]["get"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.checkAuth())
      return await this.get(`/payment/kyc/stripe/account`);
  }

  async postKyc(): Promise<
    | paths["/api/v1/payment/kyc/stripe/account"]["post"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.checkAuth())
      return await this.post(`/payment/kyc/stripe/account`);
  }

  async deleteKyc(): Promise<
    | paths["/api/v1/payment/kyc/stripe/account"]["delete"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.checkAuth())
      return await this.delete(`/payment/kyc/stripe/account`);
  }

  async getTransactions(
    query: paths["/api/v1/payment/transactions"]["get"]["parameters"]["query"]
  ): Promise<
    | paths["/api/v1/payment/transactions"]["get"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.checkAuth())
      return await this.get(`/payment/transactions`, query);
  }

  async getTransaction(
    transactionId: string
  ): Promise<
    | paths["/api/v1/payment/transaction/{transaction_id}"]["get"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.checkAuth())
      return await this.get(`/payment/transaction/${transactionId}`);
  }

  async postWithdraw(): Promise<
    | paths["/api/v1/payment/withdraw"]["post"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.checkAuth()) return await this.post(`/payment/withdraw`);
  }

  async getConfigBalance(): Promise<
    | paths["/api/v1/payment/config/balance"]["get"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.checkAuth())
      return await this.get(`/payment/config/balance`);
  }

  async getPaymentGateway(
    paymentId: string
  ): Promise<
    | paths["/api/v1/payment/gateway/checkout/{payment_id}"]["get"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.checkAuth())
      return await this.get(`/payment/gateway/checkout/${paymentId}`);
  }

  async getPaymentGatewayStatus(
    paymentId: string
  ): Promise<
    | paths["/api/v1/payment/gateway/checkout/{payment_id}/status"]["get"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.checkAuth())
      return await this.get(`/payment/gateway/checkout/${paymentId}/status`);
  }

  async checkPaymentGatewayStatus(
    paymentId: string
  ): Promise<
    | paths["/api/v1/payment/gateway/checkout/{payment_id}/check/status"]["get"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.checkAuth())
      return await this.get(
        `/payment/gateway/checkout/${paymentId}/check/status`
      );
  }
}

export default Payment;
