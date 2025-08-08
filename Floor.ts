import { Flat } from "./Flat"
export class Floor {
    number: number
    flats = {}

    constructor(number, flatsCount) {
        this.number = number

        for (let i = 0; i < 1; i++) {
            const flat = new Flat(i)
            this.flats[flat.getNumber()] = flat
        }
    }

    getNumber() {
        return this.number
    }
}