import { Flat } from "./Flat"
export class Floor {
    number: number
    flats = {}

    constructor(number, flatsCount) {
        this.number = number

        for (let i = 0; i < flatsCount; i++) {
            const flat = new Flat(i)
            console.log('flat.getNumber() :>> ', flat.getNumber());
            this.flats[flat.getNumber()] = flat
        }
    }

    getNumber() {
        return this.number
    }
}