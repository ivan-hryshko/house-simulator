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
    passenger: Person[] = [];
    
    constructor(floors, capasity = 2) {
        this.capasity = capasity 
        this.door = new Door()
        this.floors = floors
        this.location = this.floors[0]
    }

    action(): void {
        if (this.#isTargetsExist()) {
            const isReach = this.#checkTarget()
            if (isReach) { return }
        }
        this.door.close()
        if (this.#isTargetsExist()) {
            if (this.direction === ElevatorDirection.UP) {
                if (this.#isMaxTargetHiger()) {
                    this.#changeDirection()
                } else {
                    this.#moveUp()
                }
            } else if (this.direction === ElevatorDirection.DOWN) {

            } else if (this.direction === ElevatorDirection.NONE) {
                this.#setDirection(ElevatorDirection.UP)
            }
        }
    }

    checkFreeSpace(): number {
        const passengerCount = this.passenger.length
        const freeSpace = this.capasity - passengerCount
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
            this.passenger.push(person)
            return true
        }
        return false
    }

    exit(personExit: Person): boolean {
        this.passenger.filter(p => p.getId() !== personExit.getId())
        return true
    }

    getDoor(): Door {
        return this.door
    }

    getDoorStatus(): ElevatorDoorState {
        return this.door.getStatus()
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
    
    #move(location: Floor): void {
        this.location = location
    }
    #isTargetsExist() {
        return this.targets.length
    }

    #isMaxTargetHiger(): boolean {
        const currentFloor = this.#getCurrentFloorNumber()
        const floorsNumbers = this.getFloorsNumbers()

        const isGreater = floorsNumbers.every(fNumber => currentFloor > fNumber);
        return isGreater
    }

    #getCurrentFloorNumber() {
        return this.location.getNumber()
    }

    #checkTarget(): boolean {
        const isReach = this.#isReachTarget()
        console.log('isReach :>> ', isReach);
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