import { IGameDisplay } from "../interfaces/game.inerface";
import { Game } from "./Game";

export class GameDisplay implements IGameDisplay {
    game: Game;

    constructor(game) {
        this.game = game        
    }

    showTick(): void {
        // elevator: location: '', direction, personsload
        const elevator = this.game.getElevator()
        console.log(`location: ${elevator.getLocation()}, direction: ${elevator.getDirection()}\n`);
        const persons = this.game.getPersons()
        persons.forEach(person => {
            // id: personId, location
            console.log(`id: ${person.getId()}, location: ${person.getLocation()}\n`);
        });
        this.showDivider()
    }

    showDivider(): void {
        console.log('=======\n');
    }
}