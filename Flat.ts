import { IFlat } from "./interfaces/house.interface"

export class Flat implements IFlat {
    number: number

    constructor(number) {
        this.number = number
    }

    getNumber() {
        return this.number
    }
}