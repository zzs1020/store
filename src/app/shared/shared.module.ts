import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddToCartComponent } from './cmps/add-to-cart/add-to-cart.component';
import { SideMenuComponent } from './cmps/side-menu/side-menu.component';
import { ImgComponent } from './cmps/img/img.component';
import { StarsComponent } from './cmps/stars/stars.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AddToCartComponent,
    SideMenuComponent,
    ImgComponent,
    StarsComponent
  ],
  exports: [
    AddToCartComponent,
    SideMenuComponent,
    ImgComponent,
    StarsComponent
  ]
})
export class SharedModule { }
