export class Category {
    code?: string
    label: string
    description?: string

    constructor(data: CategoryType) {
        this.label = data.label
        this.description = data.description
        this.code = data.code
    }
}

export interface CategoryInterface {
    code?: string
    label: string
    description?: string
}

export type CategoryType = {
    code?: string
    label: string
    description?: string
}