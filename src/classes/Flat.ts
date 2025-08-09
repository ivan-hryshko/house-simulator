import { IFlat } from "../interfaces/house.interface"
import { Floor } from "./Floor"
import { Person } from "./Person"

export class Flat implements IFlat {
    number: number
    owner: Person | null
    floor: Floor

    constructor(number: number, floor: Floor) {
        this.number = number
        this.floor = floor
    }

    getNumber(): number {
        return this.number
    }

    setOwner(person: Person): void {
        this.owner = person
    }

    getFloor(): Floor {
        return this.floor
    }
}