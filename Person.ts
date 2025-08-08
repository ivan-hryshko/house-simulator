import { IPerson } from "./interfaces/peson.interface"

export class Person implements IPerson {
    id: number
    target: PesronTarger

    constructor({ id }) {
        this.id = id
    }
}

export enum PesronTarger {
    home = 'home',
    job = 'job'
}