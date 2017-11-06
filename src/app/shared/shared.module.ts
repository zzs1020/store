import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddToCartComponent } from './cmps/add-to-cart/add-to-cart.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AddToCartComponent],
  exports: [AddToCartComponent]
})
export class SharedModule { }
