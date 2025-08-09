import { IPerson } from "./peson.interface";

export interface IHouse {
    readonly number: number
    floors: {
        [key: number]: IFloor
    };
    elevator: IElevator
    action(): void
    getFlats(): IFlat[]
    getElevator(): IElevator
}

export interface IFloor {
    readonly number: number
    flats: {
        [key: number]: IFlat
    };
    getNumber(): number
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

export interface IElevator {
    door: IDoor
    capasity: number
    location: IFloor
    targets: IFloor[]
    passenger: IPerson[]
    direction: ElevatorDirection
    floors: {
        [key: number]: IFloor
    };
    action(): void
    setTarget(target: IFloor): void
    getLocation(): IFloor
    getDoor(): IDoor
    getDirection(): ElevatorDirection
    getFloorsNumbers(): number[]
    getTargetsNumbers(): number[]
    setTergetFirstFloor(): void
    checkFreeSpace(): number
    enter(person: IPerson): boolean
    exit(person: IPerson): boolean
    getDoorStatus(): ElevatorDoorState
}

export enum ElevatorDirection {
    UP = 'UP',
    DOWN = 'DOWN',
    NONE = 'NONE'
}


export interface IDoor {
    status: ElevatorDoorState
    open(): void
    close(): void
    getStatus(): ElevatorDoorState
}

export enum ElevatorDoorState {
  Closed = "Closed",
  Open = "Open",
}