import { Component, Input } from '@angular/core';
import { Feature } from '../../model/features.model';
import { FormsModule } from '@angular/forms';
import { features } from 'process';
import { response } from 'express';
import { ProductFeaturesService } from '../../services/product-features.service';
import { RouterModule,Router} from '@angular/router';
import { FormGroup, FormControl , Validators,  } from '@angular/forms';
@Component({
  selector: 'app-create-feature',
  standalone: true,
  imports: [FormsModule,RouterModule],
  templateUrl: './create-feature.component.html',
  styleUrl: './create-feature.component.css'
})

export class CreateFeatureComponent {
  createForm = new FormGroup({
    Id: new FormControl(''),
    featureTitle: new FormControl(''),
    description: new FormControl('')
  });

newFeature: Feature={
  id:'',
  featureTitle:'',
  description:'',
  estCapacity:'',
  status:'',
  targetCompDate:'',
  actualCompDate:''
}



constructor(private productFeatureService: ProductFeaturesService,private router: Router)
{
 
}

@Input() feature: any;

// onSubmit(formData: { value: any; }) {
//   console.log(formData.value);

//   this.productFeatureService.addProductFeature(formData.value).subscribe(res => {
//     this.router.navigateByUrl('featuresList');
//   });
// }
createProductFeature() {
  this.productFeatureService.addProductFeature(this.newFeature).subscribe({
    next: (Feature) => {
      this.router.navigate(['featuresList']);
    },
    error: (response) => {
      console.log(response);
    },
  });
}



}
