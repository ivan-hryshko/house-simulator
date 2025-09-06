import { Elevator } from "../classes/Elevator";
import { Flat } from "../classes/Flat";
import { Floor } from "../classes/Floor";
import { IHouse } from "../interfaces/house.interface";
import { IHouseService, IHouseServiceConstructor } from "../interfaces/house-service.interface";

export class HouseService implements IHouseService {
    floorCount: number
    floors = {}
    elevator: Elevator;

    constructor({ floorCount }: IHouseServiceConstructor) {
        this.floorCount = floorCount
    }
    
    async init(): Promise<void> {
        for (let i = 0; i < this.floorCount; i++) {
            const flatsCount = 1
            const floor = new Floor(i, flatsCount)
            this.floors[floor.getNumber()] = floor
        }
        this.elevator = new Elevator(this.floors)
        
    }

    // getFlats(): Flat[] {
    //     const flats: Flat[] = []
    //     const floors: Floor[] = Object.values(this.floors)
    //     floors.forEach((floor: Floor) => {
    //         flats.push(...floor.getFlats())
    //     })
    //     return flats
    // }

    action(): void {
        // this.elevator.action()
    }

    // getElevator(): Elevator {
    //     return this.elevator
    // }
}