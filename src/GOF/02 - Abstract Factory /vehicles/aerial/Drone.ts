import IAircraft from "./interfaces/IAircraft";

export default class Drone implements IAircraft{
    startRoute(): void {
        this.checkWind();
        this.getCargo();
        console.log("Starting route...");
    }
    
    getCargo(): void {
        console.log("Got the delivery package");
    }
    
    checkWind(): void {
        console.log("Wind is ok!");
    }

}