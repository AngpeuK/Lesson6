export class User {
    namn: string
    surname: string
    phone: string
    address: string
    consentGiven: undefined | boolean


    constructor(namn: string, surname: string, phone: string, address: string) {
        this.namn = namn;
        this.surname = surname;
        this.phone = phone;
        this.address = address;
    }
}