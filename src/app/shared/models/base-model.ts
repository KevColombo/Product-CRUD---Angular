export class BaseModel{
    id?: number;
    createdAt?: Date;
    updatedAt?: Date;
    isActive?: boolean;

    constructor(){
        this.id = -1;
        this.createdAt = new Date();
        this.updatedAt = new Date();
        this.isActive = true;
    }
}