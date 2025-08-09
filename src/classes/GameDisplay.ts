import { IGameDisplay } from "../interfaces/game.inerface";
import { Game } from "./Game";
import { Person } from "./Person";

export class GameDisplay implements IGameDisplay {
    game: Game;

    constructor(game) {
        this.game = game        
    }

    showTick(): void {
        this.#displayElevator()
        const persons = this.game.getPersons()
        persons.forEach(person => {
            this.#displayPerson(person)
        });
        this.showDivider()
    }

    #displayPerson(person: Person) {
        // id: personId, location
        const id = `id: ${person.getId()}`
        const location = `location: ${person.getLocation()}`
        const personFlat = person.getFlat()
        const flatFoor = personFlat?.getFloor().getNumber()
        const flat = `flat: ${flatFoor}-${personFlat?.getNumber()}`
        console.log(`${id}, ${location}, ${flat}\n`);

    }

    #displayElevator() {
        // elevator: location: '', direction, personsload
        const elevator = this.game.getElevator()
        const location = `location: ${elevator.getLocation().getNumber()}`
        const direction = `direction: ${elevator.getDirection()}`
        const targets = `targets: [${elevator.getTargetsNumbers()}]`
        const door = elevator.getDoor()
        const doorStatus = `door: [${door.getStatus()}]`
        console.log(`elevator: ${location}, ${direction}, ${doorStatus}, ${targets}\n`);
    }

    showDivider(): void {
        console.log('=======\n');
    }
}