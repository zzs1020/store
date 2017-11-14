import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShopModule } from './shop/shop.module';
import { SharedModule } from './shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { productsReducer } from './shared/reducers/products.reducer';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    ShopModule,
    SharedModule,
    StoreModule.forRoot({ products: productsReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
