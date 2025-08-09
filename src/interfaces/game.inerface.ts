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
    speed: number
    setOwners(): void
    start(): void
    nextTick(): void
    getTick(): number
    getPersons(): IPerson[]
    getElevator(): IElevator
}

export interface IGameDisplay {
    game: IGame
    showTick(): void
    showDivider(): void
}