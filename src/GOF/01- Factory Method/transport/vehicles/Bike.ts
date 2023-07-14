import IVehicle from "./interfaces/IVehicle";

export default class Bike implements IVehicle{
    startRoute(): void {
        this.getCargo();
        console.log("Starting the route...")
    }
    getCargo(): void {
        console.log("Got food package...");
    }

}