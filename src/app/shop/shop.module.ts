import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdComponent } from './featured/ad/ad.component';
import { FeaturedComponent } from './featured/featured.component';
import { CategoriesComponent } from './featured/categories/categories.component';
import { ShelfComponent } from './featured/shelf/shelf.component';
import { ItemsComponent } from './featured/shelf/items/items.component';
import { TitleComponent } from './featured/shelf/title/title.component';
import { SharedModule } from '../shared/shared.module';
import { DetailsComponent } from './details/details.component';
import { ShopRoutingModule } from './shop-routing.module';
import { BlahComponent } from './details/blah/blah.component';
import { CommentComponent } from './details/blah/comment/comment.component';
import { ProductService } from '../shared/services/product/product.service';
import { AllComponent } from './all/all.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ShopRoutingModule,
    NgbModule
  ],
  declarations: [
    AdComponent,
    FeaturedComponent,
    CategoriesComponent,
    ShelfComponent,
    ItemsComponent,
    TitleComponent,
    DetailsComponent,
    BlahComponent,
    CommentComponent,
    AllComponent
  ],
  exports: [
  ],
  providers: [
    ProductService
  ]
})
export class ShopModule { }
