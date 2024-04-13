import { ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CreateFeatureComponent } from './create-feature.component';
import { ProductFeaturesService } from '../../services/product-features.service';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule, FormsModule, FormBuilder } from '@angular/forms';
describe('CreateFeatureComponent', () => {
  let component: CreateFeatureComponent;
  let fixture: ComponentFixture<CreateFeatureComponent>;
  let service: ProductFeaturesService;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule, HttpClientTestingModule],
      providers: [ProductFeaturesService, FormBuilder]
    })
    .compileComponents();
    service = TestBed.inject(ProductFeaturesService);
    fixture = TestBed.createComponent(CreateFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize form', () => {
    expect(component.createForm).toBeDefined();
    expect(component.createForm.controls['Id']).toBeDefined();
    expect(component.createForm.controls['featureTitle']).toBeDefined();
    expect(component.createForm.controls['description']).toBeDefined();
    expect(component.createForm.controls['estCapacity']).toBeDefined();
    expect(component.createForm.controls['Status']).toBeDefined();
    expect(component.createForm.controls['TarCompDate']).toBeDefined();
    expect(component.createForm.controls['ActCompDate']).toBeDefined();
  });
});
