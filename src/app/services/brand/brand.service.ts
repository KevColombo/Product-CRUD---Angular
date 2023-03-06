import { Injectable } from '@angular/core';

import { Brand } from 'src/app/shared/models/brand';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  brands: Brand[] =[{id:1, name: 'Hammer&Nails'}, {id:2, name: 'Black n Decker'}];
  constructor() { }

  public getAll(): Brand[]{
    return this.brands;
  }
}
