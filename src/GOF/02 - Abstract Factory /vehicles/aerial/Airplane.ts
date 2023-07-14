import IAircraft from "./interfaces/IAircraft";

export default class Airplane implements IAircraft{
    startRoute(): void {
        this.checkWind();
        this.getCargo();
        console.log("Starting route...");
    }
    getCargo(): void {
        console.log("Passengers have successfully boarded!");
    }
    checkWind(): void {
        console.log("Wind is ok!");
    }

}