import { House } from "../../models/House";
import { IGame, IGameDisplay } from "../interfaces/game.inerface";
import { PersonLocation } from "../interfaces/peson.interface";
import { Person } from "../classes/Person";
import sleep from "../utils/sleep";
import { GameDisplay } from "../classes/GameDisplay";
import { IElevator } from "../interfaces/house.interface";
import { IGameService } from "../interfaces/game-service.inerface";
import { Game } from "../../models/Game";
import { HouseService } from "./HouseService";
import { Floor } from "../../models/Floor";

export class GameService implements IGameService {
    private game: Game
    private housService: HouseService

    constructor() {
    }
    
    async init(): Promise<void> {
        console.log('init start');
        this.game = await Game.create({});
        this.housService = new HouseService({ floorCount: 10, gameId: this.game.id })
        await this.housService.init()
        const gameWithHouses = await Game.findByPk(this.game.id, {
            include: [{
                model: House,
                include: [Floor]
            }],
        });
        console.log(JSON.stringify(gameWithHouses, null, 2));


        // this.setOwners()
        // this.display = new GameDisplay(this)
        console.log('init finish');

    }

    // setOwners(): void {
    //    this.#addPersonsForAllFloors()
    //     // this.#addPersonForLastFloor()
    // }

    async start(): Promise<void> {
        // console.log('game start');
        // this.#setIsRun(true)
        // this.display.showDivider()
        // this.display.showTick()

        // while (this.isRun) {
        //     await sleep(this.speed)
        //     this.nextTick()
        //     this.display.showTick()
        // }
    }

    // nextTick(): void {
    //     this.#increaseTick()
    //     this.house.action()
    //     this.getPersons().forEach(p => p.action())
    // }

    // #increaseTick() {
    //     this.tick = this.tick + 1
    // }

    // getTick(): number {
    //     return this.tick
    // }

    // getPersons(): Person[] {
    //     return Object.values(this.persons)
    // }

    // getElevator(): IElevator {
    //     return this.house.getElevator()
    // }

    // #setIsRun(isRun: boolean): void {
    //     this.isRun = isRun
    // }

    // #addPersonForLastFloor() {
    //     const flats = this.house.getFlats() 
    //     const lastFlat = flats[flats.length - 1]
    //     const person = new Person({
    //         id: 0,
    //         location: PersonLocation.job,
    //         flat: lastFlat,
    //         elevator: this.house.getElevator(),
    //         game: this
    //     })
    //     this.persons[person.getId()] = person
    //     lastFlat.setOwner(person)
    // }
    // #addPersonsForAllFloors() {
    //     const flats = this.house.getFlats() 
    //     flats.forEach((flat, index) => {
    //         if (flat.floor.getNumber() !== 0) {
    //             const person = new Person({
    //                 id: index,
    //                 location: PersonLocation.job,
    //                 flat,
    //                 elevator: this.house.getElevator(),
    //                 game: this
    //             })
    //             this.persons[person.getId()] = person
    //             flat.setOwner(person)
    //         }
    //     })
    // }
}
