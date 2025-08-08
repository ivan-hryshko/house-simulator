import { Floor } from "./Floor";
import { IHouse } from "./interfaces/house.interface";
export class House implements IHouse {
    floors = {}

    constructor({ floorCount }) {
        for (let i = 0; i < floorCount; i++) {
            const flatsCount = 1
            const floor = new Floor(i, flatsCount)
            this.floors[floor.getNumber()] = floor
        }
    }

    get
}