import { TestBed, inject } from '@angular/core/testing';

import { CartService } from './cart.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StoreModule } from '@ngrx/store';
import { cartReducer } from '../../reducers/cart.reducer';

describe('CartService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        StoreModule.forRoot({cart: cartReducer})],
      providers: [
        CartService,
        ]
    });
  });

  it('should be created', inject([CartService], (service: CartService) => {
    expect(service).toBeTruthy();
  }));
});
