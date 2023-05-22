export default class User {
    name: string
    phone: string
    email: string
    birthDate?: Date

    constructor(data: UserType) {
        this.name = data.name
        this.phone = data.phone
        this.email = data.email
        this.birthDate = data.birthDate
    }   
}

export type UserType = {
    name: string
    phone: string
    email: string
    birthDate?: Date
}