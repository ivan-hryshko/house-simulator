import { Flat } from "./Flat"
import { IPerson, PersonLocation, PesronTarget } from "../interfaces/peson.interface"

export class Person implements IPerson {
    id: number
    target: PesronTarget
    flat: Flat | null
    location: PersonLocation

    constructor({ id, location, flat }: { id :number, location: PersonLocation, flat: Flat }) {
        this.id = id
        this.target = PesronTarget.home
        this.location = location
        this.flat = flat
    }

    action(): void {
        
    }

    move(locatio: PersonLocation): void {
        
    }
}
