import { Product } from '../services/product/product';
import { Cart } from '../services/cart/cart';

export interface ProductsState {
  products: Product[];
}

export interface CartState {
  cart: Cart;
}
