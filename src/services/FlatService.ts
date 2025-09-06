import { IFlatService } from "../interfaces/house-service.interface"
import { IFlat } from "../interfaces/house.interface"
// import { Floor } from "../classes/Floor"
import { FloorService } from "./FloorService"
import { Person } from "../classes/Person"
import { Flat } from "../../models/Flat"

export class FlatService implements IFlatService {
    flat: Flat
    number: number
    owner: Person | null
    floorService: FloorService

    constructor(number: number, floor: FloorService) {
        this.number = number
        this.floorService = floor
    }

    async init() {
        this.flat = await Flat.create({
            number: this.number,
            floorId: this.floorService.getId()
        })
    }

    getId(): number {
        return this.flat.id
    }

    getNumber(): number {
        return this.number
    }

    setOwner(person: Person): void {
        this.owner = person
    }

    getFloor(): FloorService {
        return this.floorService
    }
}