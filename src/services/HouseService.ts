import { Elevator } from "../classes/Elevator";
import { Flat } from "../classes/Flat";
import { IHouse } from "../interfaces/house.interface";
import { IHouseService, IHouseServiceConstructor } from "../interfaces/house-service.interface";
import { House } from "../../models/House";
import { Floor } from "../../models/Floor";
import { FloorService } from "./FloorService";

export class HouseService implements IHouseService {
    gameId: number
    floorCount: number
    floorServices = {}
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
            const level = i
            const floorService = new FloorService({
                level,
                houseId: this.house.id,
                flatsCount,
            })
            await floorService.init()

            this.floorServices[level] = floorService
        }
        this.elevator = new Elevator(this.floorServices)
        
    }

    // getFlats(): Flat[] {
    //     const flats: Flat[] = []
    //     const floorServices: Floor[] = Object.values(this.floorServices)
    //     floorServices.forEach((floor: Floor) => {
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