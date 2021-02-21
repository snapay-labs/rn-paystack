export interface InitializeOptions {
  publicKey: string;
}

export interface ChargeParams {
  cardNumber: string;
  expiryMonth: string;
  expiryYear: string;
  cvc: string;
  email: string;
  amountInKobo: string;
  subAccount: string;
}

export interface ChargeWithAccessCodeParams {
  cardNumber: string;
  expiryMonth: string;
  expiryYear: string;
  cvc: string;
  accessCode: string;
}

export interface ChargeResult {
  reference: string;
}

export declare class RNPaystack {
  init(options: InitializeOptions): any;
  chargeCard(chargeParams: ChargeParams): Promise<ChargeResult>;
  chargeCardWithAccessCode(
    chargeParams: ChargeWithAccessCodeParams
  ): Promise<ChargeResult>;
}

export default new RNPaystack();
