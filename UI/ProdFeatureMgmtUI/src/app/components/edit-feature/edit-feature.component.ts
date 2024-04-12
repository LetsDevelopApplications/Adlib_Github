import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductFeaturesService } from '../../services/product-features.service';
import { RouterModule,Router} from '@angular/router';
import { Feature } from '../../model/features.model';
import { FormsModule } from '@angular/forms';
import {
  NgIf,
  NgForOf,
  NgFor,
  CommonModule
} from '@angular/common';

@Component({
  selector: 'app-edit-feature',
  standalone: true,
  imports: [FormsModule,NgIf,CommonModule],
  templateUrl: './edit-feature.component.html',
  styleUrl: './edit-feature.component.css'
})

export class EditFeatureComponent {
  @Input() feature: Feature ;

  constructor(private productFeatureService: ProductFeaturesService,private router: Router)
  {

  }
 
  updateFeature(feature: Feature){
      this.productFeatureService.editProductFeature(feature).subscribe(res => {
        alert(res.toString());
    });
  }

  deleteFeature(feature: Feature){
      this.productFeatureService.DeleteProductFeature(feature).subscribe(res => {
        alert(res.toString());
    });
  }
}
