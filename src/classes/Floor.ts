import { Flat } from "./Flat"
import { IFloor } from "../interfaces/house.interface"
export class Floor implements IFloor {
    number: number
    flats = {}

    constructor(number, flatsCount) {
        this.number = number

        for (let i = 0; i < flatsCount; i++) {
            const flat = new Flat(i, this)
            this.flats[flat.getNumber()] = flat
            console.log(`created flat: ${this.getNumber()}-${flat.getNumber()}`);
        }
    }

    getNumber() {
        return this.number
    }

    getFlats(): Flat[] {
        return Object.values(this.flats)
    }
}