import { Category } from "./Category"

export class Product {
    code?: string
    name: string
    providerCode? : string
    unitPrice: number
    description: string
    images?: Array<string>
    categories?: Array<Category>

    constructor(data: Product) {
        this.code = data.code;
        this.name = data.name;
        this.providerCode = data.providerCode;
        this.unitPrice = data.unitPrice;
        this.description = data.description;
        this.images = data.images;
        this.categories = data.categories;
    }
}

export interface ProductInterface {
    code?: string
    name: string
    providerCode? : string
    unitPrice: number
    description: string
    images?: Array<string>
    categories?: Array<Category>
}

export type ProductType = {
    code?: string
    name: string
    providerCode? : string
    unitPrice: number
    description: string
    images?: Array<string>
    categories?: Array<Category>
}