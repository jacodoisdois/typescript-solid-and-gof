import Vehicle from "./Vehicle";

export default interface VehicleMotorCycle extends Vehicle {
    motorcycleConfig(color: string, year: number, engine: number);
}