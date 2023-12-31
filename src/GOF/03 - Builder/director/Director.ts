import IBuilder from "../builders/IBuilder";
import Engine from "../components/Engine";
import Transmission from "../components/Transmission";
import VehicleType from "../components/VehicleType";
import Wheel from "../components/Wheel";

export default class Director {
    constructor(private builder: IBuilder){

    }

     constructSedanCar(){
        this.builder.setVehicleType(VehicleType.SEDAN);
        this.builder.setSeats(4);
        this.builder.setTransmission(Transmission.AUTOMATIC);
        this.builder.setEngine(new Engine(1600));
        this.builder.addWheel(new Wheel(15));
        this.builder.addWheel(new Wheel(15));
        this.builder.addWheel(new Wheel(15));
        this.builder.addWheel(new Wheel(15));
     }

     constructTruck(){
        this.builder.setVehicleType(VehicleType.TRUCK);
        this.builder.setSeats(2);
        this.builder.setTransmission(Transmission.AUTOMATIC);
        this.builder.setEngine(new Engine(2800));
        this.builder.addWheel(new Wheel(30));
        this.builder.addWheel(new Wheel(30));
        this.builder.addWheel(new Wheel(30));
        this.builder.addWheel(new Wheel(30));
    }
    
    constructMotorcycle(){
         this.builder.setVehicleType(VehicleType.MOTORCYCLE);
         this.builder.setSeats(1);
         this.builder.setTransmission(Transmission.AUTOMATIC);
         this.builder.setEngine(new Engine(300));
         this.builder.addWheel(new Wheel(11));
         this.builder.addWheel(new Wheel(11));
     }
}