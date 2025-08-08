import { Door } from "./Door";
import { Floor } from "./Floor";
import { IDoor, IEvevator } from "./interfaces/house.interface";

export class Elevator implements IEvevator {
    door: Door;
    capasity: number
    location: Floor;
    
    constructor(capasity = 2) {
        this.capasity = capasity 
        this.door = new Door()
    }

    action(): void {
        
    }

    move(locatio: Floor): void {
        
    }
}