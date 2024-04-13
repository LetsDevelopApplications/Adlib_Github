import { TestBed } from '@angular/core/testing';

import { ProductFeaturesService } from './product-features.service';

import {HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { features } from 'process';
import { Feature } from '../model/features.model';
import test from 'node:test';

describe('ProductFeaturesService', () => {
  let service: ProductFeaturesService;
  let testingController :HttpTestingController;
  let features :Feature;
  let mockfeatures :Feature;
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
       const mockfeatures : Feature={
        id:'1101',
        featureTitle:'test from angular',
        description:'test from angular',
        estCapacity:'',
        status:'S',
        targetCompDate:'',
        actualCompDate:''
      };
       
       mockRequest.flush(Object.values(mockfeatures));

  });

});
