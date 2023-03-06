import { BaseModel } from "./base-model";
import { Brand } from "./brand";

export class Product extends BaseModel{
    name!: string;
    description?: string;
    weight!: number;
    stock?: number = 0;
    image?: string;
    brand?: Brand;
    constructor(){
        super()
    }
}