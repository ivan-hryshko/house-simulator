import { Floor } from "../../models/Floor"
import { Flat } from "../classes/Flat"
import { IFloorService, IFloorServiceConstructor } from "../interfaces/house-service.interface"
import { FlatService } from "./FlatService"

export class FloorService implements IFloorService {
    floor: Floor
    flatsCount: number
    level: number
    houseId: number
    flatsService = {}

    constructor({ flatsCount, level, houseId  } : IFloorServiceConstructor) {
        this.flatsCount = flatsCount
        this.level = level
        this.houseId = houseId

    }
    async init() {
        this.floor = await Floor.create({ level: this.level, houseId: this.houseId })
        for (let i = 0; i < this.flatsCount; i++) {
            const flatService = new FlatService(i, this)
            await flatService.init()
            this.flatsService[i] = flatService
            console.log(`created flat: ${this.getLevel()}-${flatService.getNumber()}`);
        }
        
    }

    getId() {
        return this.floor.id
    }
    getLevel() {
        return this.floor.level
    }

    getFlats(): FlatService[] {
        return Object.values(this.flatsService)
    }
}