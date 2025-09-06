import { IFlat } from "./house.interface";
import { IPerson } from "./peson.interface";

export interface IHouseService {
    init(): Promise<void>
    action(): void
    // getFlats(): IFlat[]
    // getElevator(): IElevator
}

export interface IHouseServiceConstructor {
    floorCount: number
    gameId: number
}

export interface IFloorService {
    init(): Promise<void>
    getNumber(): number
    getFlats(): IFlat[] 
}
export interface IFloorServiceConstructor {
    flatsCount: number,
    houseId: number,
    level: number
}

// export interface IFlat {
//     readonly number: number
//     owner: IPerson | null
//     floor: IFloor
//     getNumber(): number
//     setOwner(person: IPerson): void
//     getFloor(): IFloor
// }

// export interface IElevator {
//     door: IDoor
//     capasity: number
//     location: IFloor
//     targets: IFloor[]
//     passengers: IPerson[]
//     direction: ElevatorDirection
//     floors: {
//         [key: number]: IFloor
//     };
//     action(): void
//     setTarget(target: IFloor): void
//     getLocation(): IFloor
//     getDoor(): IDoor
//     getDirection(): ElevatorDirection
//     getFloorsNumbers(): number[]
//     getTargetsNumbers(): number[]
//     setTergetFirstFloor(): void
//     checkFreeSpace(): number
//     enter(person: IPerson): boolean
//     exit(person: IPerson): boolean
//     getDoorStatus(): ElevatorDoorState
//     getPassengersIds(): number[]
// }

// export enum ElevatorDirection {
//     UP = 'UP',
//     DOWN = 'DOWN',
//     NONE = 'NONE'
// }


// export interface IDoor {
//     status: ElevatorDoorState
//     open(): void
//     close(): void
//     getStatus(): ElevatorDoorState
// }

// export enum ElevatorDoorState {
//   Closed = "Closed",
//   Open = "Open",
// }