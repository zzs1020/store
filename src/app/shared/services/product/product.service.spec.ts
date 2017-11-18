import { TestBed, inject } from '@angular/core/testing';

import { ProductService } from './product.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ProductService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductService]
    });
  });

  it('should be created', inject([ProductService], (service: ProductService) => {
    expect(service).toBeTruthy();
  }));
});
