import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartIconComponent } from './cart-icon.component';
import { StoreModule } from '@ngrx/store';
import { cartReducer } from '../../shared/reducers/cart.reducer';

describe('CartIconComponent', () => {
  let component: CartIconComponent;
  let fixture: ComponentFixture<CartIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({cart: cartReducer})
      ],
      declarations: [ CartIconComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
