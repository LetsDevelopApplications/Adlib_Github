import { Component, Input } from '@angular/core';
import { Feature } from '../../model/features.model';
import { FormBuilder, FormsModule } from '@angular/forms';
import { features } from 'process';
import { response } from 'express';
import { ProductFeaturesService } from '../../services/product-features.service';
import { RouterModule,Router} from '@angular/router';
import { FormGroup, FormControl , ReactiveFormsModule   } from '@angular/forms';
@Component({
  selector: 'app-create-feature',
  standalone: true,
  imports: [FormsModule,RouterModule,ReactiveFormsModule],
  templateUrl: './create-feature.component.html',
  styleUrl: './create-feature.component.css'
})

export class CreateFeatureComponent {
 
createForm: FormGroup;
@Input() feature: any;

newFeature: Feature={
  id:'1101',
  featureTitle:'test from angular',
  description:'test from angular',
  estCapacity:'',
  status:'S',
  targetCompDate:'',
  actualCompDate:''
}

constructor(private productFeatureService: ProductFeaturesService,private router: Router,private formbuilder: FormBuilder)
{
  this.createForm = this.formbuilder.group({
    Id: new FormControl(''),
    featureTitle: new FormControl(''),
    description: new FormControl(''),
    estCapacity: new FormControl(''),
    Status: new FormControl(''),
    TarCompDate: new FormControl(''),
    ActCompDate: new FormControl('')
  });
}

createProductFeature() {
  console.log(this.createForm.value);
  this.productFeatureService.addProductFeature(this.createForm.value).subscribe({
    next: (response) => {
      alert(response.toString());
      if(response) this.router.navigate(['featuresList']);
    },
    error: (response) => {
      console.log(response);
    },
  });
}
}
