import IAircraft from "./interfaces/IAircraft";

export default class Helicopter implements IAircraft{
    startRoute(): void {
        this.checkWind();
        this.getCargo();
        console.log("Starting route...");
    }
    getCargo(): void {
        console.log("Passengers have successfully boarded!\n Turning on propellers!");
    }
    checkWind(): void {
        console.log("Wind is ok!");
    }
}