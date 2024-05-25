import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFeatureComponent } from './manage-cart.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductFeaturesService } from '../../services/product-features.service';
import { Feature } from '../../model/Products.model';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('EditFeatureComponent', () => {
  let component: EditFeatureComponent;
  let fixture: ComponentFixture<EditFeatureComponent>;
  let productFeatureService: ProductFeaturesService;
  
  beforeEach(async () => {
     await TestBed.configureTestingModule({
        imports: [ReactiveFormsModule, FormsModule, HttpClientTestingModule],
        providers: [ProductFeaturesService, FormBuilder]
    
    })
    .compileComponents();
    productFeatureService = TestBed.inject(ProductFeaturesService);
    fixture = TestBed.createComponent(EditFeatureComponent);
    component = fixture.componentInstance;
   
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call updateFeature method', () => {
    spyOn(window, 'alert');
    const feature: Feature = {
      id: '1',
      featureTitle: 'Test Feature',
      description: 'Test Description',
      estCapacity: 'Test Capacity',
      status: 'Test Status',
      targetCompDate: '2024-04-13',
      actualCompDate: '2024-04-13'
    };
    const editProductFeatureSpy = spyOn(productFeatureService, 'editProductFeature').and.returnValue(of(feature));
    
    component.updateFeature(feature);

    expect(editProductFeatureSpy).toHaveBeenCalledWith(feature);
   
  });

  it('should call deleteFeature method', () => {
    spyOn(window, 'alert');
    const feature: Feature = {
      id: '1',
      featureTitle: 'Test Feature',
      description: 'Test Description',
      estCapacity: 'Test Capacity',
      status: 'Test Status',
      targetCompDate: '2024-04-13',
      actualCompDate: '2024-04-13'
    };
    const deleteProductFeatureSpy = spyOn(productFeatureService, 'DeleteProductFeature').and.returnValue(of('success'));
    
    component.deleteFeature(feature);

    expect(deleteProductFeatureSpy).toHaveBeenCalledWith(feature);
    expect(window.alert).toHaveBeenCalledWith('success');
  });
});
