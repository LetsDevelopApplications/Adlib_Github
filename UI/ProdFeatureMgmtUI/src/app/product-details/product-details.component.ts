
import { Component, Input, OnInit } from '@angular/core';
import { PRODUCTS, Product } from '../model/Products.model';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {
  NgIf,
  NgForOf,
  NgFor,
  CommonModule
} from '@angular/common';


@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [FormsModule,NgIf,CommonModule],
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})

export class ProductDetailsComponent implements OnInit {
  selectedproducts? : Product;
  products = PRODUCTS;
 
  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) {}


  ngOnInit(): void {
    this.selectedproducts = this.getProductById();
  }

  
  getProductById(): Product | undefined {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    return this.products.find(product => product.id === id);

  }

  goBack(): void {
    this.location.back();
  }
  // addToCart(product: Product) {
  //   // Implement logic to add the product to the cart
  //   console.log('Adding product to cart:', product);
  // }
}
