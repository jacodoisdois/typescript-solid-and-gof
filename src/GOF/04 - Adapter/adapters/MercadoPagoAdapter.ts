import MercadoPago from "../mercadopago/MercadoPago";
import IPaypalPayment from "../paypal/IPaypalPayment";
import Token from "../utils/Token";

export default class MercadoPagoAdapter implements IPaypalPayment {
    
    private token: Token;

    constructor(private payonner: MercadoPago){
        console.log("Adapting MercadoPago using the methods and standards from Paypal.");
    }

    authToken(): Token {
        return new Token();
    }

    paypalPayment(): void {
       return this.payonner.sendPayment();
    }
    
    paypalReceive(): void {
       return this.payonner.receivePayment();
    }

}