import { IHouse } from "./house.interface";
import { IPerson } from "./peson.interface";

export interface IGame {
    tick: number
    house: IHouse
    persons: {
        [key: number]: IPerson
    };
    setOwners(pesons: IPerson[]): void
    start(): void
    nextTick(): void
}