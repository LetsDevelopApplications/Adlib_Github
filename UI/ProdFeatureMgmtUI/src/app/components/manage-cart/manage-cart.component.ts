import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductFeaturesService } from '../../services/product-features.service';
import { RouterModule,Router} from '@angular/router';
import { PRODUCTS } from '../../model/Products.model';
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
  templateUrl: './manage-cart.component.html',
  styleUrl: './manage-cart.component.css'
})

export class ManageCartComponent {
//  @Input() feature: PRODUCTS ;

  constructor(private productFeatureService: ProductFeaturesService,private router: Router)
  {

  }
 
  // updateFeature(feature: PRODUCTS){
  //     this.productFeatureService.editProductFeature(feature).subscribe(res => {
  //       alert(res.toString());
  //   });
  // }

  // deleteFeature(feature: PRODUCTS){
  //     this.productFeatureService.DeleteProductFeature(feature).subscribe(res => {
  //       alert(res.toString());
  //   });
  // }
}
