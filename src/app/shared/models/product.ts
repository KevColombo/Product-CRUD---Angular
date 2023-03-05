import { BaseModel } from "./base-model";

export class Product extends BaseModel{
    name!: string;
    description?: string;
    weight!: number;
    stock?: number = 0;
    image?: string;
    brand?: string;
    constructor(){
        super()
    }
}