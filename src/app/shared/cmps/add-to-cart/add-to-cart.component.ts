import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss']
})
export class AddToCartComponent implements OnInit {
  added: boolean;
  numberOfItem: number;

  constructor() { }

  ngOnInit() {
    this.numberOfItem = 1;
  }

  addToCart() {
    this.added = true;
  }

}
