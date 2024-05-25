import { Component, Input, OnInit } from '@angular/core';

import { PRODUCTS } from '../../model/Products.model';
import { FormBuilder,FormGroup, FormsModule, Validators,ReactiveFormsModule, FormControl  } from '@angular/forms';
import { features } from 'process';
import { response } from 'express';
import { ProductFeaturesService } from '../../services/product-features.service';
import { RouterModule,Router} from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-feature',
  standalone: true,
  imports: [FormsModule,RouterModule,ReactiveFormsModule,CommonModule ],
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.css'
})

export class CreateProductComponent implements OnInit {
 
createForm!: FormGroup;
@Input() feature: any;
submitted = false;

// newFeature: PRODUCTS={
//   id:'1101',
//   featureTitle:'test from angular',
//   description:'test from angular',
//   estCapacity:'',
//   status:'S',
//   targetCompDate:'',
//   actualCompDate:''
// }

constructor(private productFeatureService: ProductFeaturesService,private router: Router,private formBuilder: FormBuilder){ }

ngOnInit()
{
  this.createForm = new FormGroup({
    featureTitle: new FormControl(),
    description: new FormControl(),
    estCapacity: new FormControl(),
    status: new FormControl(),
    targetCompDate: new FormControl(),
    actualCompDate: new FormControl()
});

  // this.createForm = this.formBuilder.group({
  //   featureTitle:['',Validators.required],
  //   description:['',Validators.required],
  //   estCapacity:['',Validators.required],
  //   status:['',Validators.required],
  //   targetCompDate:['',Validators.required],
  //   actualCompDate:['',Validators.required]
  // })
}

get f() { return this.createForm.controls; }


onReset() {
  this.submitted = false;
  this.createForm.reset();
}

// createProductFeature() {
//   console.log(this.createForm.invalid);
//   this.submitted = true;

//   // stop here if form is invalid
//   if (this.createForm.invalid) {
//       return;
//   }
// else{
//   this.productFeatureService.addProductFeature(this.createForm.value).subscribe({
//     next: (response) => {
//       alert(response.toString());
//       if(response) this.router.navigate(['featuresList']);
//     },
//     error: (response) => {
//       console.log(response);
//     },
//   });
//   alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.createForm.value, null, 4));
// }
// }
}
