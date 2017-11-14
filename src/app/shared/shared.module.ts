import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddToCartComponent } from './cmps/add-to-cart/add-to-cart.component';
import { SideMenuComponent } from './cmps/side-menu/side-menu.component';
import { ImgComponent } from './cmps/img/img.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AddToCartComponent,
    SideMenuComponent,
    ImgComponent,
  ],
  exports: [
    AddToCartComponent,
    SideMenuComponent,
    ImgComponent,
  ]
})
export class SharedModule { }
