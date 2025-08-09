import { IElevator, IFlat } from "./house.interface"

export interface IPerson {
    id: number
    flat: IFlat | null
    target: PesronTarget
    location: PersonLocation
    elevator: IElevator
    action(): void
    move(location: PersonLocation): void
    getNextLcoation(): PersonLocation
    reachTarget(): void
    setTarget(target: PesronTarget): void
    getIsWantEnterElevator(): boolean
}

export enum PesronTarget {
    home = 'home',
    job = 'job'
}
export enum PersonLocation {
    home = 'home',
    elevator = 'elevator',
    elevator_bottom = 'elevator_bottom',
    elevator_up = 'elevator_up',
    job = 'job'
}
export const PersonLocationOrder = [
    PersonLocation.job,
    PersonLocation.elevator_bottom,
    PersonLocation.elevator,
    PersonLocation.elevator_up,
    PersonLocation.home
]

