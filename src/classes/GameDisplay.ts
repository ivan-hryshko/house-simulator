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
        this.#showTickDivider()
    }

    #displayPerson(person: Person) {
        // id: personId, location
        const id = `id: ${person.getId()}`
        const location = `location: ${person.getLocation()}`
        const personFlat = person.getFlat()
        const flatFoor = personFlat?.getFloor().getNumber()
        const flat = `flat: ${flatFoor}-${personFlat?.getNumber()}`
        const target = `target: ${person.getTarget()}`
        const pause = `pause: [${person.getPauseTick()}]`
        console.log(`person: ${id},${flat}, ${location}, ${target}, ${pause}\n`);

    }

    #displayElevator() {
        // elevator: location: '', direction, personsload
        const elevator = this.game.getElevator()
        const location = `location: ${elevator.getLocation().getNumber()}`
        const direction = `direction: ${elevator.getDirection()}`
        const targets = `targets: [${elevator.getTargetsNumbers()}]`
        const door = elevator.getDoor()
        const doorStatus = `door: [${door.getStatus()}]`
        const passengers = `passengers: [${elevator.getPassengersIds()}]`
        console.log(`elevator: ${location}, ${direction}, ${doorStatus}, ${targets}, ${passengers}\n`);
    }

    showDivider(): void {
        console.log('=======\n');
    }

    #showTickDivider() {
        console.log(`${this.game.getTick()} =======\n`);
    }
}