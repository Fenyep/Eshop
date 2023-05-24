import { Category } from "./Category"

export class Product {
    code?: string
    name: string
    providerCode? : string
    quantity?: number
    unitPrice: number
    description: string
    images?: Array<string>
    categories?: Array<Category>
    createdAt: Date
    modifiedAt: Date

    constructor(data: Product) {
        this.code = data.code;
        this.name = data.name;
        this.providerCode = data.providerCode;
        this.quantity = data.quantity ?? 10;
        this.unitPrice = data.unitPrice;
        this.description = data.description;
        this.images = data.images;
        this.categories = data.categories;
        this.createdAt = data.createdAt;
        this.modifiedAt = data.modifiedAt;
    }
}

export interface ProductInterface {
    code?: string
    name: string
    providerCode? : string
    quantity?: number
    unitPrice: number
    description: string
    images?: Array<string>
    categories?: Array<Category>
    createdAt?: Date
    modifiedAt?: Date
}

export type ProductType = {
    code?: string
    name: string
    providerCode? : string
    quantity?: number
    unitPrice: number
    description: string
    images?: Array<string>
    categories?: Array<Category>
    createdAt: Date
    modifiedAt: Date
}