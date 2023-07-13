import Airplane from "../aerial/Airplane";
import IAircraft from "../aerial/interfaces/IAircraft";
import Car from "../land/Car";
import ILandVehicle from "../land/interfaces/ILandVehicle";
import ITransporFactory from "./interfaces/ITransportFactory";

export default class UberTransport implements ITransporFactory{
 
    createTransportVehicle(): ILandVehicle {
        return new Car();
    }
 
    createTransportAircraft(): IAircraft {
        return new Airplane();
    }


}