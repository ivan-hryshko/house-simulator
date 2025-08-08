import { Elevator } from "./Elevator";
import { Flat } from "./Flat";
import { Floor } from "./Floor";
import { IHouse } from "../interfaces/house.interface";
export class House implements IHouse {
    floors = {}
    evevator: Elevator;
    number: number;

    constructor({ floorCount, number }) {
        this.evevator = new Elevator()
        this.number

        for (let i = 0; i < floorCount; i++) {
            const flatsCount = 1
            const floor = new Floor(i, flatsCount)
            this.floors[floor.getNumber()] = floor
        }
    }

    getFlats(): Flat[] {
        const flats: Flat[] = []
        const floors: Floor[] = Object.values(this.floors)
        floors.forEach((floor: Floor) => {
            flats.push(...floor.getFlats())
        })
        return flats
    }

    action(): void {
        this.evevator.action()
    }
}