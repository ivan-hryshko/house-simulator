import { House } from "./House";
import { IGame } from "./interfaces/game.inerface";
import { Person } from "./Person";

export class Game implements IGame {
    house: House

    constructor() {
        this.#init()
    }
    
    #init() {
        console.log('init start');
        this.house = new House({ floorCount: 10, number: 0 })

        console.log('init finish');

    }
}
