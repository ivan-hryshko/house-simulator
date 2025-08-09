import { Flat } from "./Flat"
import { IPerson, PersonLocation, PersonLocationOrder, PesronTarget } from "../interfaces/peson.interface"
import { Elevator } from "./Elevator"
import { ElevatorDoorState, IFlat } from "../interfaces/house.interface"

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
        if (this.#isNearEvelevatorToHome()) {
            const isEnter = this.elevator.enter(this)
            if (isEnter) {
                this.move(PersonLocation.elevator)
                this.setElevatorMyFloor()
            }
        } else if (this.#isNeearEvelevatorToOutside()) {

        } else if (this.#isEvelevatorToHome()) {
            const elevLocation = this.elevator.getLocation().getNumber()
            if (elevLocation === this.getFloorNumber()) {
                if (this.elevator.getDoorStatus() === ElevatorDoorState.Open) {
                    this.move(PersonLocation.elevator_up)
                }
            }
        } else if (this.#isEvelevatorToOutside()) {
            const elevLocation = this.elevator.getLocation().getNumber()
            if (elevLocation === 0) {
                this.move(PersonLocation.elevator_bottom)
            }
        } else {
            const nextLocation = this.getNextLcoation()
            this.move(nextLocation)
            if (this.#isNearEvelevatorToHome()) {
                this.elevator.setTergetFirstFloor()
            } else if (this.#isNeearEvelevatorToOutside()) {
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

    #isEvelevatorToHome(): boolean {
        const isElevatorGoHome = this.location === PersonLocation.elevator && this.target === PesronTarget.home
        return isElevatorGoHome
    }
    #isEvelevatorToOutside(): boolean {
        const isElevatorGoHome = this.location === PersonLocation.elevator && this.target === PesronTarget.job
        return isElevatorGoHome
    }
    #isNearEvelevatorToHome(): boolean {
        const isElevatorGoHome = this.location === PersonLocation.elevator_bottom && this.target === PesronTarget.home
        return isElevatorGoHome
    }
    #isNeearEvelevatorToOutside(): boolean {
        const isElevatorGoOutside = this.location === PersonLocation.elevator_up && this.target === PesronTarget.job
        return isElevatorGoOutside
    }

    #getIsWantEnterElevator() {
        const wantEnterElevator = this.#isNearEvelevatorToHome()
            || this.#isNeearEvelevatorToOutside()
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

    getId(): number {
        return this.id
    }

    getLocation(): PersonLocation {
        return this.location
    }

    getFlat(): Flat | null {
        return this.flat
    }

    getFloorNumber() {
        return this.flat?.getFloor().getNumber()
    }
}
