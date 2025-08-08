import { House } from "./House";

export class Game {
    house: House

    constructor() {
        this.#init()
    }
    
    #init() {
        this.house = new House({floorCount: 10})
        console.log('init');

    }
}
