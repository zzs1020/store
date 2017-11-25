import { Action } from '../settings/action';
import { Cart } from '../services/cart/cart';

export function cartReducer(state: Cart = new Cart(), action: Action<Cart>) {
  switch (action.type) {
    case 'add':
      return action.payload;
    default:
      return state;
  }
}
