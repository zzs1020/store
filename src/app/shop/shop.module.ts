import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdComponent } from './featured/ad/ad.component';
import { FeaturedComponent } from './featured/featured.component';
import { CategoriesComponent } from './featured/categories/categories.component';
import { ShelfComponent } from './featured/shelf/shelf.component';
import { ItemComponent } from './featured/shelf/item/item.component';
import { TitleComponent } from './featured/shelf/title/title.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    AdComponent,
    FeaturedComponent,
    CategoriesComponent,
    ShelfComponent,
    ItemComponent,
    TitleComponent
  ],
  exports: [
  ]
})
export class ShopModule { }
