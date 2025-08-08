import { Door } from "./Door";
import { Floor } from "./Floor";
import { IDoor, IEvevator, IFloor } from "../interfaces/house.interface";

export class Elevator implements IEvevator {
    door: Door;
    capasity: number
    location: Floor;
    targets: IFloor[] = [];
    
    constructor(capasity = 2) {
        this.capasity = capasity 
        this.door = new Door()
    }

    action(): void {
        
    }

    move(locatio: Floor): void {
        
    }

    setTarget(target: IFloor): void {
        
    }
}