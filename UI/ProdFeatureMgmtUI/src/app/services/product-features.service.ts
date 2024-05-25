import { Injectable } from '@angular/core';
import { Product } from '../model/Products.model';
import { Observable, catchError, throwError } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { ALL } from 'dns';


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
  products : Product;


  constructor(private http:HttpClient) { }

  getAllProductFeatures():Product {
   return  this.products ; //this.http.get<Products[]>(this.baseApiUrl+ '/api/ProductFeaturesontroller',httpOptions);
  };
 
  // getProductById(id: number): Products {
  //   return this.products.find(product => product.id === id);
  // }

  }
