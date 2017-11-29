import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsComponent } from './details.component';
import { SharedModule } from '../../shared/shared.module';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ProductService } from '../../shared/services/product/product.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CartService } from '../../shared/services/cart/cart.service';
import { StoreModule } from '@ngrx/store';
import { cartReducer } from '../../shared/reducers/cart.reducer';

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      imports: [SharedModule, HttpClientTestingModule, RouterTestingModule, StoreModule.forRoot({cart: cartReducer})],
      declarations: [ DetailsComponent ],
      providers: [
        ProductService,
        CartService,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
