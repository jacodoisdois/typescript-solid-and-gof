import VehicleMotorCycle from "./VehicleMotorcycle";

export default class Motorcycle implements VehicleMotorCycle{
    constructor(
        color: string,
        year: number,
        engine: number
    ) {
        this.motorcycleConfig(color, year, engine);
    }

    startVehicle(): void {
        console.log("Starting the engine...");
    }
   
    motorcycleConfig(color: string, year: number, engine: number) {
        console.log(`Color: ${color}\nYear: ${year}\nEngine: ${engine}`);
        this.startVehicle();
    }

}