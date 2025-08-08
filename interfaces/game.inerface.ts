import { IHouse } from "./house.interface";
import { IPerson } from "./peson.interface";

export interface IGame {
    house: IHouse
    persons: {
        [key: number]: IPerson
    };
    setOwners(pesons: IPerson[]): void
}