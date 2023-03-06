import { Injectable } from '@angular/core';
import { Product } from 'src/app/shared/models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [
    {id:1, name:'Hammer w/big head', description: 'Practical and heavy hammer', weight: 4 , brand: {id:1, name: 'Hammers&Nails'} , stock:10, isActive:true},
    {id:2, name:'Chainsaw', description: 'Efficient chainsaw', weight: 7 ,brand: {id:2, name: 'Black n Decker'} , stock: 6, isActive:true}
  ];
  constructor() { }

  getAll(): Product[] {
    return this.products.filter(item => item.isActive);
  }

  getById(id: number){
    return this.products.find(item => item.id == id)!;
  }

  getLastId(): number{
    return this.products.length;
  }

  add(prod: Product){
    prod.id = this.getLastId() + 1 ;
    this.products.push(prod);
  }

  update(prod: Product): boolean{
    let index = this.products.findIndex(item => item.id == prod.id);
    if(index >=0 ){
      this.products[index] = prod;
      return true;
    }
    else
      return false;

  }

  delete(id: number): boolean{
    let p = this.products.find(item => item.id = id);
    if(p != undefined){
      p.isActive = false;
      return true;
    }else
      return false;
  }
}
