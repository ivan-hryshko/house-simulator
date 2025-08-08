import { Flat } from "./Flat"
import { IPerson, PersonLocation, PersonLocationOrder, PesronTarget } from "../interfaces/peson.interface"

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
        const wantEnterElevator = this.location === PersonLocation.elevator_bottom && this.target === PesronTarget.home
            || this.location === PersonLocation.elevator_up && this.target === PesronTarget.job
        if (wantEnterElevator) {

        } else {
            const nextLocation = this.getNextLcoation()

        }

  
    }

    getNextLcoation() {
        const index = PersonLocationOrder.findIndex(order => order === this.location)
        if (index !== -1) {
            if (this.target === PesronTarget.home) {
                return PersonLocationOrder[index + 1]
            } else if(this.target === PesronTarget.job) {
                return PersonLocationOrder[index -1]
            }
        } else {
            throw Error('Can\'t find index PersonLocationOrder') 
        }
    }

    move(location: PersonLocation): void {
        
    }

    reachTarget(): void {
        
    }
}
