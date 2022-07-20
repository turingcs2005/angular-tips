import { last } from "rxjs";

export class Purchase {
    constructor (
        public firstName: string = '',
        public lastName: string = '',
        public apple: number = 0,
        public orange: number = 0,
        public bread: number = 0,
    ) {}

    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }

    get totalPurchase() {
        return this.apple + this.orange + this.bread;
    }
}