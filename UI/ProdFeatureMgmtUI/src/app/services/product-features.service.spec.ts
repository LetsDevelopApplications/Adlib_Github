import { TestBed } from '@angular/core/testing';

import { ProductFeaturesService } from './product-features.service';

import {HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { features } from 'process';
import { Products } from '../model/Products.model';
import test from 'node:test';

describe('ProductFeaturesService', () => {
  let service: ProductFeaturesService;
  let testingController :HttpTestingController;
  let features :Products;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ProductFeaturesService);
    testingController = TestBed.inject(HttpTestingController);
    
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add new feature', () => {
       service.addProductFeature(features).subscribe((features: any) =>
       {
          expect(features).toBeTruthy();
       });

       const mockRequest = testingController.expectOne('https://localhost:7193/api/ProductFeaturesontroller/AddProductFeatures');
       const mockProducts : Products={
        id: 12, productTitle: 'Base layer top', 
        productDetails: 'The Icebreaker 260 Tech Long Sleeve Crew is an incredibly warm base layer for cold-weather activities like skiing, snowshoeing and skating.', productFeatures: 'CREW NECK,Long Sleeves,Breathable', 
        colour: 'Black', actualprice: 134.99, salePrice: 93.99, reviews: 'None', OverallRating: 4,
        productSpecifications: ""
      };
       
       mockRequest.flush(Object.values(mockProducts));

  });

});
