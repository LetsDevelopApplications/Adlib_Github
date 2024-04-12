import { Injectable } from '@angular/core';
import { Feature } from '../model/features.model';
import { Observable, catchError, throwError } from 'rxjs';
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
 
 
  addProductFeature(Feature: Feature): Observable<any> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<any>(this.baseApiUrl + '/api/ProductFeaturesontroller/AddProductFeatures', Feature, httpOptions);
  }

  editProductFeature(Feature: Feature): Observable<Feature> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put<Feature>(this.baseApiUrl + '/api/ProductFeaturesontroller/EditProductFeatures', Feature, httpOptions);
  }

  DeleteProductFeature(Feature: Feature): Observable<any> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<any>(this.baseApiUrl + '/api/ProductFeaturesontroller/DeleteProductFeatures', Feature, httpOptions);
  }


  }
