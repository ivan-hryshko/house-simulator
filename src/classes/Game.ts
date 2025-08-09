import { House } from "./House";
import { IGame, IGameDisplay } from "../interfaces/game.inerface";
import { PersonLocation } from "../interfaces/peson.interface";
import { Person } from "./Person";
import sleep from "../utils/sleep";
import { GameDisplay } from "./GameDisplay";
import { IElevator } from "../interfaces/house.interface";

export class Game implements IGame {
    isRun: boolean = false;
    house: House
    tick: number = 0;
    persons: {
        [key: number]: Person
    } = {};
    display: GameDisplay;

    constructor() {
        this.init()
    }
    
    init() {
        console.log('init start');
        this.house = new House({ floorCount: 10, number: 0 })
        this.setOwners()
        this.display = new GameDisplay(this)
        console.log('init finish');

    }

    setOwners(): void {
    //    this.#addPersonsForAllFloors()
        this.#addPersonForLastFloor()
    }

    async start(): Promise<void> {
        console.log('game start');
        this.#setIsRun(true)
        this.display.showDivider()
        this.display.showTick()

        while (this.isRun) {
            await sleep(1000)
            this.nextTick()
            this.display.showTick()
        }
    }

    nextTick(): void {
        this.#increaseTick()
        this.house.action()
        this.getPersons().forEach(p => p.action())
    }

    #increaseTick() {
        this.tick = this.tick + 1
    }

    getTick(): number {
        return this.tick
    }

    getPersons(): Person[] {
        return Object.values(this.persons)
    }

    getElevator(): IElevator {
        return this.house.getElevator()
    }

    #setIsRun(isRun: boolean): void {
        this.isRun = isRun
    }

    #addPersonForLastFloor() {
        const flats = this.house.getFlats() 
        const lastFlat = flats[flats.length - 1]
        const person = new Person({
            id: 0,
            location: PersonLocation.job,
            flat: lastFlat,
            elevator: this.house.getElevator(),
            game: this
        })
        this.persons[person.getId()] = person
        lastFlat.setOwner(person)
    }
    #addPersonsForAllFloors() {
            const flats = this.house.getFlats() 
        flats.forEach((flat, index) => {
            const person = new Person({
                id: index,
                location: PersonLocation.job,
                flat,
                elevator: this.house.getElevator(),
                game: this
            })
            this.persons[person.getId()] = person
            flat.setOwner(person)
        })
    }
}
