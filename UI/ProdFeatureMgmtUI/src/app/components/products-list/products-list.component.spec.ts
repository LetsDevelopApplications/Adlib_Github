import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesListComponent } from './products-list.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProductFeaturesService } from '../../services/product-features.service';

describe('FeaturesListComponent', () => {
  let component: FeaturesListComponent;
  let fixture: ComponentFixture<FeaturesListComponent>;
  let productFeatureService: ProductFeaturesService;

  beforeEach(() => {
     TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule, HttpClientTestingModule],
      providers: [ProductFeaturesService]
    })
    .compileComponents();
   
    fixture = TestBed.createComponent(FeaturesListComponent);
    component = fixture.componentInstance;
    productFeatureService = TestBed.inject(ProductFeaturesService);
    
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
