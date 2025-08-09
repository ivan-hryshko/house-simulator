import { Flat } from "./Flat"
import { IPerson, PersonLocation, PersonLocationOrder, PesronTarget } from "../interfaces/peson.interface"
import { Elevator } from "./Elevator"
import { ElevatorDoorState } from "../interfaces/house.interface"
import { Game } from "./Game"

export class Person implements IPerson {
    id: number
    target: PesronTarget
    flat: Flat | null
    location: PersonLocation
    elevator: Elevator
    game: Game
    pauseTicks: number = 0

    constructor({ id, location, flat, elevator, game }
        : { id :number, location: PersonLocation, flat: Flat, elevator: Elevator, game: Game }
    ) {
        this.id = id
        this.target = PesronTarget.home
        this.location = location
        this.flat = flat
        this.elevator = elevator
        this.game = game
    }

    action(): void {
        if (this.#isNearEvelevatorToHome()) {
            if (this.elevator.getLocation().getNumber() > 0) {
                this.elevator.setTergetFirstFloor()
            }
            if (this.elevator.getLocation().getNumber() === 0 && this.elevator.getDoorStatus() === ElevatorDoorState.Open) {
                const isEnter = this.elevator.enter(this)
                if (isEnter) {
                    this.move(PersonLocation.elevator)
                    this.setElevatorMyFloor()
                }
            }
        } else if (this.#isNeearEvelevatorToOutside()) {
            if (this.elevator.getLocation().getNumber() === this.getFloorNumber()
                && this.elevator.getDoorStatus() === ElevatorDoorState.Open) {
                const isEnter = this.elevator.enter(this)
                if (isEnter) {
                    this.move(PersonLocation.elevator)
                    this.elevator.setTergetFirstFloor()
                }
            } else {
                this.setElevatorMyFloor()
            }
        } else if (this.#isEvelevatorToHome()) {
            const elevLocation = this.elevator.getLocation().getNumber()
            if (elevLocation === this.getFloorNumber()) {
                if (this.elevator.getDoorStatus() === ElevatorDoorState.Open) {
                    this.elevator.exit(this)
                    this.move(PersonLocation.elevator_up)
                }
            }
        } else if (this.#isEvelevatorToOutside()) {
            const elevLocation = this.elevator.getLocation().getNumber()
            if (elevLocation === 0) {
                this.elevator.exit(this)
                this.move(PersonLocation.elevator_bottom)
            }
        } else if (this.#isFinish() && this.game.getTick() !== 1) {
            if (this.pauseTicks) {
                this.#decresePause()
            } else {
                this.#opositTarget()
                this.#moveToNext()
            }
        }   
        else {
            this.#moveToNext()
            // if (this.#isNearEvelevatorToHome()) {
            // } else if (this.#isNeearEvelevatorToOutside()) {
            // }
        }
    }

    setElevatorMyFloor() {
        if (this.flat) {
            this.elevator.setTarget(this.flat.getFloor())
        }
    }

    getPauseTick(): number {
        return this.pauseTicks
    }
    #moveToNext() {
        const nextLocation = this.getNextLcoation()
        this.move(nextLocation)
        if (this.#isNearEvelevatorToHome()) {
            this.elevator.setTergetFirstFloor()
        } else if (this.#isNeearEvelevatorToOutside()) {
            this.setElevatorMyFloor()
        } else if (this.#isFinish()) {
            this.#setRandomPause()
        }
    }

    #setRandomPause() {
        const max = 15
        const min = 10
        this.pauseTicks = Math.floor(Math.random() * (max - min + 1)) + min
    }

    #decresePause() {
        if (this.pauseTicks > 0) {
            this.pauseTicks = this.pauseTicks - 1
        } else {
            throw Error('can\'t decrese pause')
        }
    }


    #isFinish() {
        return this.location === PersonLocation.home || this.location === PersonLocation.job
    }

    #opositTarget() {
        if (this.target === PesronTarget.home) {
            this.setTarget(PesronTarget.job)
        } else  if (this.target === PesronTarget.job) {
            this.setTarget(PesronTarget.home)
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
        this.target = target
    }

    getTarget(): PesronTarget {
        return this.target
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
