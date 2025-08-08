import { IHouse } from "./house.interface";
import { IPerson } from "./peson.interface";

export interface IGame {
    isRun: boolean
    tick: number
    house: IHouse
    persons: {
        [key: number]: IPerson
    };
    setOwners(): void
    start(): void
    nextTick(): void
}