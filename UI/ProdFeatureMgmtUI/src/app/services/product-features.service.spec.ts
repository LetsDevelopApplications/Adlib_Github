import { TestBed } from '@angular/core/testing';

import { ProductFeaturesService } from './product-features.service';

describe('ProductFeaturesService', () => {
  let service: ProductFeaturesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductFeaturesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
