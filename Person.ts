import { Flat } from "./Flat"
import { IPerson, PersonLocation, PesronTarget } from "./interfaces/peson.interface"

export class Person implements IPerson {
    id: number
    target: PesronTarget
    flat: Flat | null
    location: PersonLocation

    constructor({ id, location }: { id :number, location: PersonLocation }) {
        this.id = id
        this.target = PesronTarget.home
        this.location = location
    }
}
