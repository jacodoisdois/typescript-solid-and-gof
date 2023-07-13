import Drone from "../aerial/Drone";
import IAircraft from "../aerial/interfaces/IAircraft";
import Scooter from "../land/Scooter";
import ILandVehicle from "../land/interfaces/ILandVehicle";
import ITransporFactory from "./interfaces/ITransportFactory";

export default class LimeTransport implements ITransporFactory{
    
    createTransportVehicle(): ILandVehicle {
        return new Scooter();
    }
    
    createTransportAircraft(): IAircraft {
        return new Drone();
    }

}