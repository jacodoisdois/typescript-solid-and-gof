import CarTransport from "./transport/CarTransport";
import MotorcycleTransport from "./transport/MotorcycleTransport";
import Transport from "./transport/Transport";

let transport: Transport;
const transportType: string = 'loggi';

if(transportType === 'uber'){
    transport = new CarTransport();
} else if( transportType === 'loggi' ) {
    transport = new MotorcycleTransport();
} else {
    throw new Error("Invalid transport type");
}

transport.startTransport();