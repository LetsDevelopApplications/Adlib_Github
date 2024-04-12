import { Injectable } from '@angular/core';
import { Feature } from '../model/features.model';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders(
    {
      'Content-Type': 'application/json',
    }
  )
};

@Injectable({
  providedIn: 'root'
})
export class ProductFeaturesService {
 
  baseApiUrl: string="https://localhost:7193";

  
  constructor(private http:HttpClient) { }

  getAllProductFeatures():Observable<Feature[]> {
   return this.http.get<Feature[]>(this.baseApiUrl+ '/api/ProductFeaturesontroller',httpOptions);
  }
  
  addProductFeature(newFeature: Feature):Observable<Feature> {
    newFeature.Id='00000000-0000-0000-0000-000000000000';
    return this.http.post<Feature>(this.baseApiUrl+"/api/products",newFeature);
    
  }
  }
