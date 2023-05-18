/*type PaymentAuthorization = undefined;
type ShippingInfo = undefined;

export type Order = {
  payment_authorization: PaymentAuthorization;
}

export type User = {
  user_id: number;
  shipping_info: ShippingInfo;
  order: Order;
};*/

import { AuthenticatedUser } from "./auth"

export const payForOrder = (user: AuthenticatedUser) => {
  console.log(user.profile.username);
};
