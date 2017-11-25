import { Product } from '../product/product';

export class Cart {
  _id: string;
  tax: number;
  preTotal: number;
  total: number;
  generalDiscount: number;
  updatedTime: Date;
  cartItems: CartItem[];

  constructor() {
    this.cartItems = [];
  }
}

export class CartItem {
  quantity: number;
  promo: number;
  product: Product;

  constructor(product?) {
    // always new an instance if this property is an object, otherwise api may return null, and null.field will error
    this.product = new Product(product);
    this.quantity = 1;
    this.promo = 0;
  }
}
