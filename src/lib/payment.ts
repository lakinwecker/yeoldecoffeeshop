// import * as Stripe from "stripe"


export type StripeArgs = undefined; // TODO: fix this.

export type PaymentVerificationI = {
  readonly verifyPayment: (a: StripeArgs) => boolean;
};

export const StripePaymentVerification: PaymentVerificationI = {
  verifyPayment: (a: StripeArgs): boolean => {
    if (a === '34567u8i9') {
      /*if (stripe.apiVerify(a)) {
        return true;
      }*/
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
