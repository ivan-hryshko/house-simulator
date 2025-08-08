import { Door } from "./Door";
import { IDoor, IEvevator } from "./interfaces/house.interface";

export class Elevator implements IEvevator {
    door: Door;
    capasity: number

    constructor(capasity = 2) {
        this.capasity = capasity 
        this.door = new Door()
    }
}