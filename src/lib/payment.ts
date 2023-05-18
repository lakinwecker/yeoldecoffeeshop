/*type BillingAddress = undefined;
type CreditCardInfo = {
  billing_address: BillingAddress;
  card_number: string;
};
type PaypalInfo = undefined;
type PaymentMethod = PaypalInfo | CreditCardInfo;

export type User = {
  user_id: number;
  payment_methods: PaymentMethod[]; // private?
};

type PaymentAuthorization = {
  uuid: number;
};*/



/*

// import * as Stripe from "stripe"


export type StripeArgs = undefined; // TODO: fix this.

export type PaymentVerificationI = {
  readonly verifyPayment: (a: StripeArgs) => boolean;
};

export const StripePaymentVerification: PaymentVerificationI = {
  verifyPayment: (a: StripeArgs): boolean => {
    if (a === '34567u8i9') {
      if (stripe.apiVerify(a)) {
        return true;
      }
return true;
    }
return false;
  },
};

export const TestPaymentVerification: PaymentVerificationI = {
  verifyPayment: (a: StripeArgs): boolean => {
    if (a === '34567u8i9') {
      return true;
    }
    return false;
  },
};
*/
