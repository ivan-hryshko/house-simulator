import { IFlat } from "./interfaces/house.interface"
import { Person } from "./Person"

export class Flat implements IFlat {
    number: number
    owner: Person | null = null

    constructor(number) {
        this.number = number
    }

    getNumber(): number {
        return this.number
    }
}