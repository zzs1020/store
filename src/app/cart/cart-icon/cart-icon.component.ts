import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Cart } from '../../shared/services/cart/cart';
import { CartState } from '../../shared/settings/states.interface';

@Component({
  selector: 'my-cart-icon',
  templateUrl: './cart-icon.component.html',
  styleUrls: ['./cart-icon.component.scss']
})
export class CartIconComponent implements OnInit {
  cart$: Observable<Cart>;

  constructor(private store: Store<CartState>) { }

  ngOnInit() {
    this.cart$ = this.store.select('cart');
  }

}
