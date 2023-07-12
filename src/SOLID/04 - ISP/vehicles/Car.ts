import VehicleCar from "./VehicleCar";

export default class Car implements VehicleCar {
    constructor(
        color: string,
        year: number,
        engine: number,
        seats: number
    ) {
        this.carConfig(color, year, engine, seats);
    }

    startVehicle(): void {
        console.log("Starting the engine...")
    }
    
    carConfig(color: string, year: number, engine: number, seats: number): void {
        console.log(`Color: ${color}\nYear: ${year}\nEngine: ${engine}\nSeats: ${seats}`);
        this.startVehicle();
    }

}