import { IFlat } from "./house.interface"

export interface IPerson {
    id: number
    flat: IFlat | null
    target: PesronTarget
    location: PersonLocation
}

export enum PesronTarget {
    home = 'home',
    job = 'job'
}
export enum PersonLocation {
    flat = 'flat',
    near_flat = 'near_flat',
    elevator = 'elevator',
    evevator_bottom = 'evevator_bottom',
    job = 'job'
}