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
import { cartReducer } from './shared/reducers/cart.reducer';
import { CartModule } from './cart/cart.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production}),
    ShopModule,
    CartModule,
    SharedModule,
    StoreModule.forRoot({ products: productsReducer, cart: cartReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25 //  Retains last 25 states
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
