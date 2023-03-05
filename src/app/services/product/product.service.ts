import { Injectable } from '@angular/core';
import { Product } from 'src/app/shared/models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products = [
    {id:1, name:'Hammer w/big head', description: 'Practical and heavy hammer', weight: 4 , brand: 'Hammers&Nails', stock:10},
    {id:2, name:'Chainsaw', description: 'Efficient chainsaw', weight: 7 , brand: 'Black n Decker', stock: 6}
  ];
  constructor() { }

  getAll(): Product[] {
    return this.products;
  }

  getById(id: number){
    return this.products.find(item => item.id == id)!;
  }
}
