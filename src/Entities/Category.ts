export class Category {
    code?: string
    label: string
    description?: string
    createdAt: Date
    modifiedAt: Date

    constructor(data: CategoryType) {
        this.label = data.label
        this.description = data.description
        this.code = data.code
        this.createdAt = data.createdAt
        this.modifiedAt = data.modifiedAt
    }
}

export interface CategoryInterface {
    code?: string
    label: string
    description?: string
    createdAt?: Date
    modifiedAt?: Date
}

export type CategoryType = {
    code?: string
    label: string
    description?: string
    createdAt: Date
    modifiedAt: Date
}