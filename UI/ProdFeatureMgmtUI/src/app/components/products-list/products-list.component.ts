import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from '../../model/Products.model';
import { CommonModule } from '@angular/common';
import { RouterModule,Router} from '@angular/router';


import {
  NgIf,
  NgForOf,
  NgFor
} from '@angular/common';
import {FormsModule} from '@angular/forms';
import { ProductFeaturesService } from '../../services/product-features.service';
import { error } from 'console';
import { response } from 'express';
import { CreateProductComponent } from "../create-product/create-product.component";
import { ManageCartComponent } from "../manage-cart/manage-cart.component";

@Component({
    selector: 'app-features-list',
    standalone: true,
    templateUrl: './products-list.component.html',
    styleUrl: './products-list.component.css',
    imports: [CommonModule,
        FormsModule,
        NgIf,
        NgFor, NgForOf, RouterModule, CreateProductComponent, ManageCartComponent]
})
export class FeaturesListComponent{
  products = PRODUCTS;


  productToEdit:any;
 

  constructor(private productfeaturesservice:ProductFeaturesService, private router: Router){}

  // ngOnInit(): void {
    
  //   // this.productfeaturesservice.getAllProductFeatures()
  //   // .subscribe({
  //   //   next: (products) => {
  //   //     this.products = products;
  //   //     console.log(this.products);
  //   //   },
  //     // error:(response) => {
  //     //   console.log(response);
  //     // }
  //   //});
  // }


    // {
    //   featuretitle:'Inventory change',
    //   description:'Inventory change notification',
    //   estCapacity:'S',
    //   status:'New',
    //   targetCompDate: '10-Jun-2023',
    //   ActualCompDate: '12-Jun-2023'
    // }
    // {
    //   featuretitle:'User settings',
    //   description:'User settings are persisted',
    //   estCapacity:'M',
    //   status:'Active',
    //   targetCompDate: '10-May-2023',
    //   ActualCompDate: '12-Jun-2023'
    // },
    // {
    //   featuretitle:'Migration',
    //   description:'Migrate to new database management system',
    //   estCapacity:'M',
    //   status:'Active',
    //   targetCompDate: '10-May-2023',
    //   ActualCompDate: '12-Jun-2023'
    // }

  // ]
    
}
