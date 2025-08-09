import { Flat } from "./Flat"
import { IPerson, PersonLocation, PersonLocationOrder, PesronTarget } from "../interfaces/peson.interface"
import { Elevator } from "./Elevator"

export class Person implements IPerson {
    id: number
    target: PesronTarget
    flat: Flat | null
    location: PersonLocation
    elevator: Elevator

    constructor({ id, location, flat, elevator }
        : { id :number, location: PersonLocation, flat: Flat, elevator: Elevator }
    ) {
        this.id = id
        this.target = PesronTarget.home
        this.location = location
        this.flat = flat
        this.elevator = elevator
    }

    action(): void {
        if (this.getIsWantEnterElevator()) {

        } else {
            const nextLocation = this.getNextLcoation()
            this.move(nextLocation)
            if (this.getIsWantEnterElevator()) {
                this.setElevatorMyFloor()
                // TODO: set first floor
            }
        }
    }

    setElevatorMyFloor() {
        if (this.flat) {
            this.elevator.setTarget(this.flat.getFloor())
        }
    }

    getIsWantEnterElevator() {
        const wantEnterElevator = this.location === PersonLocation.elevator_bottom && this.target === PesronTarget.home
            || this.location === PersonLocation.elevator_up && this.target === PesronTarget.job
        return wantEnterElevator
    }

    getNextLcoation(): PersonLocation {
        let nextLocation
        const index = PersonLocationOrder.findIndex(order => order === this.location)
        // if (index !== -1) {
        if (this.target === PesronTarget.home) {
            nextLocation = PersonLocationOrder[index + 1]
        } else if(this.target === PesronTarget.job) {
            nextLocation = PersonLocationOrder[index -1]
        }
        return nextLocation
        // } else {
        //     throw Error('Can\'t find index PersonLocationOrder') 
        // }
    }

    move(location: PersonLocation): void {
        this.location = location
    }

    reachTarget(): void {
        
    }

    setTarget(target: PesronTarget): void {
        
    }
}
