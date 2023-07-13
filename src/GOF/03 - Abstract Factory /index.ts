import Client from "./vehicles/client/Client";
import Company from "./vehicles/conts/Company";
import NineNineTransport from "./vehicles/factories/NineNineTransport";
import UberTransport from "./vehicles/factories/UberTransport";
import ITransporFactory from "./vehicles/factories/interfaces/ITransportFactory";

const currentCompany = Company.UBER;

let factory: ITransporFactory;

switch(currentCompany){

    case Company.UBER:
        factory = new UberTransport();
        break;
    case Company.NINENINE:
        factory = new NineNineTransport();
        break;
    default:
        throw new Error("Invalid company");
}

const client = new Client(factory);

client.startRoute();