import { Injectable } from '@angular/core';
import { Product } from './product';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { ProductDetails } from './product-details';
import { Urls } from '../../settings/urls';
import 'rxjs/add/operator/map';
import { ProductsActionType } from '../../settings/action-types.enum';
import { Action } from '../../settings/action';

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) {
  }

  getPopularProducts(): Observable<Action<Product[]>> {
    return this.http.get<Product[]>(`${Urls.ENDPOINT}/products/popular`)
      .map(products => ({type: ProductsActionType.LOAD_MORE, payload: products}));
  }

  getProductDetails(productId: string): Observable<ProductDetails> {
    // return this.http.get<ProductDetails>(`${Urls.ENDPOINT}/product/${productId}`); // real one
    return this.http.get<ProductDetails>(`${Urls.ENDPOINT}/product/product_id`);
  }

}
