import { Product } from '../services/product/product';
import { ProductsActionType } from '../settings/action-types.enum';
import { Action } from '../settings/action';

export function productsReducer(state: Product[] = [], action: Action<Product[]>) {
  switch (action.type) {
    case ProductsActionType.LOAD_MORE:
      // return previous items$ + new fetched items$
      return [...state, ...action.payload];
    case ProductsActionType.REMOVE:
      return state;
    default:
      return state;
  }
}
