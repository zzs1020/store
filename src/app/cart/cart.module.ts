import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartIconComponent } from './cart-icon/cart-icon.component';
import { CartService } from '../shared/services/cart/cart.service';

@NgModule({
  imports: [
    CommonModule,
    CartRoutingModule
  ],
  declarations: [
    CartIconComponent
  ],
  exports: [
    CartIconComponent
  ],
  providers: [
    CartService
  ]
})
export class CartModule { }
