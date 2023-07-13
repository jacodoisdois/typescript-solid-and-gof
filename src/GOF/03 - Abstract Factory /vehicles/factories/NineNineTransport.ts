import Helicopter from "../aerial/Helicopter";
import IAircraft from "../aerial/interfaces/IAircraft";
import Motorcycle from "../land/Motorcycle";
import ILandVehicle from "../land/interfaces/ILandVehicle";
import ITransporFactory from "./interfaces/ITransportFactory";

export default class NineNineTransport implements ITransporFactory{
    createTransportVehicle(): ILandVehicle {
        return new Motorcycle();
    }

    createTransportAircraft(): IAircraft {
        return new Helicopter();
    }
    
}