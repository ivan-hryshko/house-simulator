import { ElevatorDoorState, IDoor } from "../interfaces/house.interface";

export class Door implements IDoor {
    status: ElevatorDoorState = ElevatorDoorState.Closed

    open(): void {
        if (this.status !== ElevatorDoorState.Open) {
            this.status = ElevatorDoorState.Open
        }
    }
    close(): void {
        if (this.status !== ElevatorDoorState.Closed) {
            this.status = ElevatorDoorState.Closed
        }
    }
    getStatus(): ElevatorDoorState {
        return this.status
    }
}