import { Component, NgModule, OnInit } from '@angular/core';


import { Product } from '../shared/models/product';

import { ProductService } from '../services/product/product.service';
import { MatTableModule } from '@angular/material/table'  
import { DataSource } from '@angular/cdk/table';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'weight', 'brand', 'stock'];
  dataSource:  Product[] = [];
  clickedRows = new Set<Product>();
  
  constructor(private productService: ProductService){}
  ngOnInit(){
    this.dataSource = this.productService.getAll();
  }
}
