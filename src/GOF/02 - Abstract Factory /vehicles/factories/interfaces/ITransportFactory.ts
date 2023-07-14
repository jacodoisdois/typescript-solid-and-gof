import IAircraft from "../../aerial/interfaces/IAircraft";
import ILandVehicle from "../../land/interfaces/ILandVehicle";

export default interface ITransporFactory{

    createTransportVehicle(): ILandVehicle;
    createTransportAircraft(): IAircraft;

}