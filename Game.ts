import { House } from "./House";
import { IGame } from "./interfaces/game.inerface";
import { PersonLocation } from "./interfaces/peson.interface";
import { Person } from "./Person";

export class Game implements IGame {
    isRun: boolean = false;
    house: House
    tick: 0;
    persons: Person[]

    constructor() {
        this.init()
    }
    
    init() {
        console.log('init start');
        this.house = new House({ floorCount: 10, number: 0 })

        console.log('init finish');

    }

    setOwners(): void {
        const flats = this.house.getFlats() 
        flats.forEach((flat, index) => {
            const person = new Person({
                id: index,
                location: PersonLocation.job,
                flat,
            })
            this.persons.push(person)
            flat.setOwner(person)
        })
    }

    start(): void {
        while (this.isRun) {
            this.nextTick()
        }
    }

    nextTick(): void {
        // moveElevator
        // movePeerson
    }
}
