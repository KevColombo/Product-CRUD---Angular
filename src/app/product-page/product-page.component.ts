import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {Router} from "@angular/router"

import { Product } from '../shared/models/product';
import { Brand } from '../shared/models/brand';

import { ProductService } from '../services/product/product.service';
import { BrandService } from '../services/brand/brand.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements  OnInit{
  protected product: Product = new Product();
  protected brands:  Brand[] = [];
  protected isNew: boolean = true;

  productForm = new FormGroup({
    name: new FormControl('',[Validators.required, Validators.maxLength(20)]),
    description: new FormControl('',[Validators.maxLength(100)]),
    weight: new FormControl(0),
    stock: new FormControl(0),
    brand: new FormControl(new Brand(), [Validators.required])
  });

  constructor(private productService: ProductService, private brandService: BrandService, 
    private activedRoute:ActivatedRoute, private router:Router){

  }
  ngOnInit(): void {
    this.brands = this.brandService.getAll();
    this.activedRoute.params.subscribe(params =>{      
      let givenId: number;
      givenId =  (params['id']!=undefined && params['id']!=null) ? params['id'] : -1;
      if( givenId >= 0){
        this.product = this.productService.getById(params['id']);
        this.isNew = false;
      }else{
        this.isNew = true;
        this.product.id = -1;
      }

      if (!this.isNew){
        this.productForm.setValue({
          name: this.product.name,
          description: this.product.description== undefined? '': this.product.description,
          weight: this.product.weight == undefined? 0 : this.product.weight,
          stock: this.product.stock == undefined ? 0 : this.product.stock,
          brand: this.product.brand == undefined ? new Brand() : this.brands.find( item=> item.id == this.product.id)! 
        } );
      }
    } )
  }

  onSave(){
    this.product.name = this.productForm.get('name')!.value!;
    this.product.description = this.productForm.get('description')!.value!;
    this.product.weight = this.productForm.get('weight')!.value!;
    this.product.stock = this.productForm.get('stock')!.value!;
    this.product.brand = this.productForm.get('brand')!.value!;

    if(this.isNew)
      this.productService.add(this.product)
    else
      this.productService.update(this.product);

    this.router.navigate(['/']);
    
  }

  onDelete(){
    this.productService.delete(this.product.id!);
    this.router.navigate(['/'])
  }
}
