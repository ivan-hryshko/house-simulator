import { Flat } from "./Flat"
import { IFlat, IFloor } from "../interfaces/house.interface"
export class Floor implements IFloor {
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

    getFlats(): IFlat[] {
        return Object.values(this.flats)
    }
}