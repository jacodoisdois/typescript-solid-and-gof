import Vehicle from "./Vehicle";

export default interface VehicleCar extends Vehicle {
    carConfig(color: string, year: number, engine: number, seats: number): void;
}