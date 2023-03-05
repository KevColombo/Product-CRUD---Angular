import { Component, OnInit } from '@angular/core';

import { Product } from '../shared/models/product';

import { ProductService } from '../services/product/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements  OnInit{
  protected product: Product = new Product();

  constructor(private productService: ProductService, private activedRoute:ActivatedRoute){

  }
  ngOnInit(): void {
    this.activedRoute.params.subscribe(params =>{
      if( params['id'] ){
        this.productService.getById(params['id']);
      }
    } )
  }
}
