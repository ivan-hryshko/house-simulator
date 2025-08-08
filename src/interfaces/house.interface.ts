import { IPerson } from "./peson.interface";

export interface IHouse {
    readonly number: number
    floors: {
        [key: number]: IFloor
    };
    elevator: Ielevator
    action(): void
    getFlats(): IFlat[]
}

export interface IFloor {
    readonly number: number
    flats: {
        [key: number]: IFlat
    };
    getFlats(): IFlat[] 
}

export interface IFlat {
    readonly number: number
    owner: IPerson | null
    floor: IFloor
    getNumber(): number
    setOwner(person: IPerson): void
    getFloor(): IFloor
}

export interface Ielevator {
    door: IDoor
    capasity: number
    location: IFloor
    targets: IFloor[]
    action(): void
    move(location: IFloor): void
    setTarget(target: IFloor): void
}


export interface IDoor {
    status: ElevatorDoorState
}

export enum ElevatorDoorState {
  Closed = "Closed",
  Open = "Open",
}