import Token from "../utils/Token";
import IPaypalPayment from "./IPaypalPayment";

export default class Paypal implements IPaypalPayment {

    private token: Token;


    authToken(): Token {
        return new Token();
    }

    paypalPayment(): void {

        this.token = this.authToken();
        
        console.log(this.token.getToken());
        console.log("Sending payments via Paypal...");
    }

    paypalReceive(): void {
        this.token = this.authToken();
        
        console.log(this.token.getToken());
        console.log("Receiving payments via Paypal...");
    }

}