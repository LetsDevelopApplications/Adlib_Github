import { Routes } from '@angular/router';
import { FeaturesListComponent } from './components/features-list/features-list.component';
import { CreateFeatureComponent } from './components/create-feature/create-feature.component';
import { EditFeatureComponent } from './components/edit-feature/edit-feature.component';


export const routes: Routes = [
    {path: '',component:FeaturesListComponent,pathMatch:'full'},
    {path: 'featuresList',component:FeaturesListComponent,pathMatch:'full'},
    {path: 'createFeature',component:CreateFeatureComponent,pathMatch:'full'},
    {path: 'edit/:id',component:EditFeatureComponent,pathMatch:'full'},
    {path: 'delete/:id',component:EditFeatureComponent,pathMatch:'full'}
];