import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdComponent } from './featured/ad/ad.component';
import { FeaturedComponent } from './featured/featured.component';
import { CategoriesComponent } from './featured/categories/categories.component';
import { ShelfComponent } from './featured/shelf/shelf.component';
import { ItemComponent } from './featured/shelf/item/item.component';
import { TitleComponent } from './featured/shelf/title/title.component';
import { SharedModule } from '../shared/shared.module';
import { DetailsComponent } from './details/details.component';
import { ShopRoutingModule } from './shop-routing.module';
import { BlahComponent } from './details/blah/blah.component';
import { CommentComponent } from './details/blah/comment/comment.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ShopRoutingModule
  ],
  declarations: [
    AdComponent,
    FeaturedComponent,
    CategoriesComponent,
    ShelfComponent,
    ItemComponent,
    TitleComponent,
    DetailsComponent,
    BlahComponent,
    CommentComponent
  ],
  exports: [
  ]
})
export class ShopModule { }
