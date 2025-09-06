import { Elevator } from "../classes/Elevator";
import { Flat } from "../classes/Flat";
import { IHouse } from "../interfaces/house.interface";
import { IHouseService, IHouseServiceConstructor } from "../interfaces/house-service.interface";
import { House } from "../../models/House";
import { Floor } from "../../models/Floor";

export class HouseService implements IHouseService {
    gameId: number
    floorCount: number
    floors = {}
    elevator: Elevator;
    house: House

    constructor({ floorCount, gameId }: IHouseServiceConstructor) {
        this.floorCount = floorCount
        this.gameId = gameId
    }
    
    async init(): Promise<void> {
        this.house = await House.create({ gameId: this.gameId })
        for (let i = 0; i < this.floorCount; i++) {
            const flatsCount = 1
            // const floor = new Floor(i, flatsCount)
            const floor = await Floor.create({ level: i, houseId: this.house.id })

            this.floors[i] = floor
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