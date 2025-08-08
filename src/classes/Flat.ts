import { IFlat } from "../interfaces/house.interface"
import { IPerson } from "../interfaces/peson.interface"
import { Person } from "./Person"

export class Flat implements IFlat {
    number: number
    owner: Person | null

    constructor(number) {
        this.number = number
    }

    getNumber(): number {
        return this.number
    }

    setOwner(person: IPerson): void {
        this.owner = person
    }
}