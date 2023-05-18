//import { Either } from 'fp-ts/Either';

//import { User } from './auth';

export const Roasts = ['Dark', 'Medium', 'Light'] as const;
export type Roast = (typeof Roasts)[number];

export type Price = number; // TODO: make stronger later

type ProductID = undefined; // TODO: define this.

export type Product = {
  readonly id: ProductID;
  readonly name: string;
  readonly roast: Roast;
  readonly price: Price;
};


/*type OrderItem = {
  readonly quantity: number;
  readonly price: number;
  readonly itemId: ProductID;
};

type List<T> = ReadonlyArray<T>;
type PaymentMethod = undefined; // TODO: define this
type Receipt = undefined; // TODO: define this

type UnpaidOrder = {
  readonly purchaser: User;
  readonly items: List<OrderItem>;
};

type PaidOrder = UnpaidOrder & {
  readonly paymentMethod: PaymentMethod;
  readonly receipt: Receipt;
};*/

/*export type CartWorkflows = {
  readonly addToOrder: (order: UnpaidOrder, newItem: OrderItem) => UnpaidOrder;
  readonly payForOrder: (
    order: UnpaidOrder,
    paymentMethod: PaymentMethod
  ) => Either<PaymentError, PaidOrder>;
};*/
