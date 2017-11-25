import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../services/product/product';
import { CartService } from '../../services/cart/cart.service';
import { CartItem } from '../../services/cart/cart';

@Component({
  selector: 'my-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss']
})
export class AddToCartComponent implements OnInit {
  added: boolean;
  numberOfItem: number;
  @Input() item: Product;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.numberOfItem = 1;
  }

  addToCart() {
    this.added = true;
    this.cartService.add(new CartItem(this.item));
  }

}
