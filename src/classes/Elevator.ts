import { Door } from "./Door";
import { Floor } from "./Floor";
import { ElevatorDirection, ElevatorDoorState, IDoor, IElevator } from "../interfaces/house.interface";
import { Person } from "./Person";
import { IPerson } from "../interfaces/peson.interface";

export class Elevator implements IElevator {
    door: Door;
    capasity: number
    location: Floor;
    targets: Floor[] = [];
    direction: ElevatorDirection = ElevatorDirection.NONE; 
    floors: { [key: number]: Floor; };
    passengers: Person[] = [];
    
    constructor(floors, capasity = 3) {
        this.capasity = capasity 
        this.door = new Door()
        this.floors = floors
        this.location = this.floors[0]
    }

    action(): void {
        this.door.close()
        if (this.#isTargetsExist()) {
            const isReach = this.#checkTarget()
            if (isReach) { return }
            if (this.direction === ElevatorDirection.UP) {
                if (this.#isHigerThanMaxTarget()) {
                    this.#changeDirection()
                } else {
                    this.#moveUp()
                }
            } else if (this.direction === ElevatorDirection.DOWN) {
                if (this.location.getNumber() > 0) {
                    this.#moveDown()
                } else if (this.targets.length) {
                    this.#setDirection(ElevatorDirection.UP)
                }
            } else if (this.direction === ElevatorDirection.NONE) {
                this.#setDirection(ElevatorDirection.UP)
            }
        }
        // if (this.#isTargetsExist()) {
        // }
    }

    checkFreeSpace(): number {
        const passengersCount = this.passengers.length
        const freeSpace = this.capasity - passengersCount
        return freeSpace
    }

    setTarget(target: Floor): void {
        const targetExist = this.getTargetsNumbers().includes(target.getNumber())
        if (!targetExist) {
            this.targets.push(target)
        }
    }

    setTergetFirstFloor(): void {
        const zeroFloor = this.floors[0]
        this.setTarget(zeroFloor)
    }

    getLocation(): Floor {
        return this.location
    }

    getDirection(): ElevatorDirection {
        return this.direction
    }

    getFloorsNumbers(): number[] {
        return Object.keys(this.floors).map(num => Number(num))
    }
    getTargetsNumbers(): number[] {
        return this.targets.map(target => Number(target.getNumber()))
    }

    enter(person: Person): boolean {
        if (this.checkFreeSpace()) {
            this.passengers.push(person)
            return true
        }
        return false
    }

    exit(personExit: Person): boolean {
        this.passengers = this.passengers.filter(p => p.getId() !== personExit.getId())
        return true
    }

    getDoor(): Door {
        return this.door
    }

    getDoorStatus(): ElevatorDoorState {
        return this.door.getStatus()
    }

    getPassengersIds(): number[] {
        return this.passengers.map(p => p.getId())
    }   

    #changeDirection() {
        if (this.direction === ElevatorDirection.UP) {
            this.#setDirection(ElevatorDirection.DOWN)
        } else if (this.direction === ElevatorDirection.DOWN) {
            this.#setDirection(ElevatorDirection.UP)
        }
    }

    #setDirection(direction: ElevatorDirection) {
        this.direction = direction
    }

    #moveUp() {
        const currentFloorNumber = this.#getCurrentFloorNumber()
        const nextFloorNumber = currentFloorNumber + 1
        const nextFloor = this.floors[nextFloorNumber]
        if (nextFloor) {
            this.#move(nextFloor)
        }
    }
    #moveDown() {
        const currentFloorNumber = this.#getCurrentFloorNumber()
        const nextFloorNumber = currentFloorNumber - 1
        const nextFloor = this.floors[nextFloorNumber]
        this.#move(nextFloor)
    }
    
    #move(location: Floor): void {
        this.location = location
    }
    #isTargetsExist() {
        return this.targets.length
    }

    #isHigerThanMaxTarget(): boolean {
        const currentFloor = this.#getCurrentFloorNumber()
        const targetNumbers = this.getTargetsNumbers()

        const isGreater = targetNumbers.every(fNumber => currentFloor > fNumber);
        return isGreater
    }

    #getCurrentFloorNumber() {
        return this.location.getNumber()
    }

    #checkTarget(): boolean {
        const isReach = this.#isReachTarget()
        if (isReach) {
            this.door.open()
            this.#removeTarget()
        }
        if (!this.targets.length) {
            this.#setDirection(ElevatorDirection.NONE)
        }
        return isReach
    }
    
    #isReachTarget(): boolean {
        const isReach = this.getTargetsNumbers().includes(this.location.getNumber())
        return isReach
    }

    #removeTarget() {
        this.targets = this.targets.filter(target => target !== this.location)
    }
}