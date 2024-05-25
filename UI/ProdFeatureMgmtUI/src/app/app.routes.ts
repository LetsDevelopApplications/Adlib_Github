import { Routes } from '@angular/router';
import { FeaturesListComponent } from './components/products-list/products-list.component';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { ManageCartComponent } from './components/manage-cart/manage-cart.component';
import { ProductDetailsComponent } from './product-details/product-details.component';


export const routes: Routes = [
    {path: '',component:FeaturesListComponent,pathMatch:'full'},
    {path: 'featuresList',component:FeaturesListComponent,pathMatch:'full'},
    {path: 'createFeature',component:CreateProductComponent,pathMatch:'full'},
    {path: 'detail/:id',component:ProductDetailsComponent,pathMatch:'full'},
    {path: 'delete/:id',component:ManageCartComponent,pathMatch:'full'}
];