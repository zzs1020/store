import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddToCartComponent } from './cmps/add-to-cart/add-to-cart.component';
import { SideMenuComponent } from './cmps/side-menu/side-menu.component';
import { ImgComponent } from './cmps/img/img.component';
import { AlertComponent } from './cmps/alert/alert.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    NgbModule
  ],
  declarations: [
    AddToCartComponent,
    SideMenuComponent,
    ImgComponent,
    AlertComponent,
  ],
  exports: [
    AddToCartComponent,
    SideMenuComponent,
    ImgComponent,
    AlertComponent
  ]
})
export class SharedModule { }
