import { Floor } from "../Floor"
import { IPerson } from "./peson.interface";

export interface IHouse {
    floors: {
        [key: number]: IFloor
    };
    evevator: IEvevator
    setOwners(persons: IPerson[]): void
    getFlatCount(): number
}

export interface IFloor {
    number: number
    flats: {
        [key: number]: IFlat
    }; 
}

export interface IFlat {
    number: number
    owner: IPerson | null
}

export interface IEvevator {
    door: IDoor
    passangerCount: number
}


export interface IDoor {
    status: ElevatorDoorState
}

export enum ElevatorDoorState {
  Closed = "Closed",
  Open = "Open",
}