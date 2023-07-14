import Client from "./vehicles/client/Client";
import Company from "./vehicles/conts/Company";
import LimeTransport from "./vehicles/factories/LimeTransport";
import NineNineTransport from "./vehicles/factories/NineNineTransport";
import UberTransport from "./vehicles/factories/UberTransport";
import ITransporFactory from "./vehicles/factories/interfaces/ITransportFactory";

const currentCompany = Company.LIME;

let factory: ITransporFactory;

switch(currentCompany){

    case Company.UBER:
        factory = new UberTransport();
        break;
    case Company.NINENINE:
        factory = new NineNineTransport();
        break;
    case Company.LIME:
        factory = new LimeTransport();
        break;
    default:
        throw new Error("Invalid company");
}

const client = new Client(factory);

client.startRoute();