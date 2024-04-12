import { Component } from '@angular/core';
import { Feature } from '../../model/features.model';
import { FormsModule } from '@angular/forms';
import { features } from 'process';
import { response } from 'express';
import { ProductFeaturesService } from '../../services/product-features.service';
import { RouterModule,Router} from '@angular/router';

@Component({
  selector: 'app-create-feature',
  standalone: true,
  imports: [FormsModule,RouterModule],
  templateUrl: './create-feature.component.html',
  styleUrl: './create-feature.component.css'
})

export class CreateFeatureComponent {

newFeature: Feature={
  Id:'',
  featureTitle:'',
  description:'',
  estCapacity:'',
  status:'',
  targetCompDate:'',
  actualCompDate:''
}

constructor(private productFeatureService: ProductFeaturesService,private router: Router)
{}

createProductFeature() {
  this.productFeatureService.addProductFeature(this.newFeature).subscribe({
    next:(features) => {
      this.router.navigate(['featuresList'])
    },
    error: (response) => {
      console.log(response);
    }
    
  });
}
}
