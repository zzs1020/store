import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddToCartComponent } from './cmps/add-to-cart/add-to-cart.component';
import { SideMenuComponent } from './cmps/side-menu/side-menu.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AddToCartComponent,
    SideMenuComponent
  ],
  exports: [
    AddToCartComponent,
    SideMenuComponent
  ]
})
export class SharedModule { }
