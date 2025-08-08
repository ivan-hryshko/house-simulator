import { Floor } from "../Floor"
import { IPerson } from "./peson.interface";

export interface IHouse {
    readonly number: number
    floors: {
        [key: number]: IFloor
    };
    evevator: IEvevator
    // getFlatCount(): number
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
    getNumber(): number
}

export interface IEvevator {
    door: IDoor
    capasity: number
}


export interface IDoor {
    status: ElevatorDoorState
}

export enum ElevatorDoorState {
  Closed = "Closed",
  Open = "Open",
}