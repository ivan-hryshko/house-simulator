import { Floor } from "../../models/Floor"
import { Flat } from "../classes/Flat"
import { IFloorService, IFloorServiceConstructor } from "../interfaces/house-service.interface"
import { IFloor } from "../interfaces/house.interface"

export class FloorService implements IFloorService {
    floor: Floor
    flatsCount: number
    level: number
    houseId: number
    flats = {}

    constructor({ flatsCount, level, houseId  } : IFloorServiceConstructor) {
        this.flatsCount = flatsCount
        this.level = level
        this.houseId = houseId

    }
    async init() {
        this.floor = await Floor.create({ level: this.level, houseId: this.houseId })
        // for (let i = 0; i < flatsCount; i++) {
        //     const flat = new Flat(i, this)
        //     this.flats[flat.getNumber()] = flat
        //     console.log(`created flat: ${this.getNumber()}-${flat.getNumber()}`);
        // }
        
    }

    getNumber() {
        return this.floor.level
    }

    getFlats(): Flat[] {
        return Object.values(this.flats)
    }
}