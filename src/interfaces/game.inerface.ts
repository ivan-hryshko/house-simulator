import { IElevator, IHouse } from "./house.interface";
import { IPerson } from "./peson.interface";

export interface IGame {
    isRun: boolean
    tick: number
    house: IHouse
    persons: {
        [key: number]: IPerson
    };
    display: IGameDisplay
    setOwners(): void
    start(): void
    nextTick(): void
    getPersons(): IPerson[]
    getElevator(): IElevator
}

export interface IGameDisplay {
    game: IGame
    showTick(): void
    showDivider(): void
}