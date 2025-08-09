import { Door } from "./Door";
import { Floor } from "./Floor";
import { ElevatorDirection, IElevator, IFloor } from "../interfaces/house.interface";
import { Person } from "./Person";

export class Elevator implements IElevator {
    door: Door;
    capasity: number
    location: Floor;
    targets: Floor[] = [];
    direction: ElevatorDirection = ElevatorDirection.NONE; 
    floors: { [key: number]: Floor; };
    passenger: Person[];
    
    constructor(floors, capasity = 2) {
        this.capasity = capasity 
        this.door = new Door()
        this.floors = floors
    }

    action(): void {
        if (this.#isTargetsExist()) {
            // checkTarget and direction
            // if target open door
            // clear target
            // isMax target higer 
        }
        // if door open 
            //  close door
        if (this.#isTargetsExist()) {
            if (this.direction === ElevatorDirection.UP) {
                if (this.#isMaxTargetHiger()) {
                    this.#moveUp()
                    
                } else {
                    this.#changeDirection()
                }
            }
        }
    }

    
    setTarget(target: Floor): void {
        // TODO: if trget in list do notthing
    }

    getLocation(): Floor {
        return this.location
    }

    getDirection(): ElevatorDirection {
        return this.direction
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
        this.#move(nextFloor)
    }
    
    #move(location: Floor): void {
        this.location = location
    }
    #isTargetsExist() {
        return this.targets.length
    }

    #isMaxTargetHiger(): boolean {
        const currentFloor = this.#getCurrentFloorNumber()
        const floorsNumbers = this.#getFloorsNumbers()

        const isGreater = floorsNumbers.every(fNumber => currentFloor > fNumber);
        return isGreater
    }

    #getCurrentFloorNumber() {
        return this.location.getNumber()
    }

    #getFloorsNumbers(): number[] {
        return Object.keys(this.floors).map(num => Number(num))
    }

    #getTargetsNumbers() {

    }
}