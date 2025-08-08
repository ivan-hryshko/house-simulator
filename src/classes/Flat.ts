import { IFlat, IFloor } from "../interfaces/house.interface"
import { IPerson } from "../interfaces/peson.interface"
import { Floor } from "./Floor"
import { Person } from "./Person"

export class Flat implements IFlat {
    number: number
    owner: Person | null
    floor: IFloor

    constructor(number: number, floor: Floor) {
        this.number = number
        this.floor = floor
    }

    getNumber(): number {
        return this.number
    }

    setOwner(person: IPerson): void {
        this.owner = person
    }

    getFloor(): IFloor {
        return this.floor
    }
}