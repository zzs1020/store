import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Urls } from '../../settings/urls';
import { Cart, CartItem } from './cart';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { Action } from '../../settings/action';
import { Store } from '@ngrx/store';
import { CartState } from '../../settings/states.interface';

@Injectable()
export class CartService {

  constructor(private http: HttpClient, private store: Store<CartState>) { }

  add(item: CartItem): void {
    this.http.post<Cart>(`${Urls.LOCAL}/cart/89757`, item)
      .pipe(map(newCart => ({type: 'add', payload: newCart})))
      .subscribe((action: Action<Cart>) => this.store.dispatch(action));
  }

  getCart(): Observable<Action<Cart>> {
    return this.http.get<Cart>(`${Urls.LOCAL}/cart/89757`)
      .pipe(map((cart: Cart) => ({type: 'add', payload: cart})));
  }

}
