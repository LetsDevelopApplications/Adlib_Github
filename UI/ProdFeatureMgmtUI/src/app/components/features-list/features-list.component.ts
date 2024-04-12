import { Component, OnInit } from '@angular/core';
import { Feature } from '../../model/features.model';
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
import { CreateFeatureComponent } from "../create-feature/create-feature.component";
import { EditFeatureComponent } from "../edit-feature/edit-feature.component";

@Component({
    selector: 'app-features-list',
    standalone: true,
    templateUrl: './features-list.component.html',
    styleUrl: './features-list.component.css',
    imports: [CommonModule,
        FormsModule,
        NgIf,
        NgFor, NgForOf, RouterModule, CreateFeatureComponent, EditFeatureComponent]
})
export class FeaturesListComponent implements OnInit{
  features: Feature[] = [];
 
  feature:any;
  featureToEdit:any;

  constructor(private productfeaturesservice:ProductFeaturesService, private router: Router){}

  ngOnInit(): void {
    this.productfeaturesservice.getAllProductFeatures()
    .subscribe({
      next: (features) => {
        this.features = features;
        console.log(this.features);
      },
      error:(response) => {
        console.log(response);
      }
    });
  }

  editFeature(feature: Feature){
    this.featureToEdit = feature;
    console.log(this.featureToEdit);
  }

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
