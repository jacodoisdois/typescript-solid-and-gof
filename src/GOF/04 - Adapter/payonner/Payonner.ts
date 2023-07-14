import Token from "../utils/Token";
import IPayonnerPayment from "./IPayonnerPayment";

export default class Payonner implements IPayonnerPayment{
    
    private token: Token;

    authToken(): Token {
        return new Token();
    }
    
   
    sendPayment(): void {
        this.token = this.authToken();
        
        console.log(this.token.getToken());
        console.log("Sending payments via Payonner...");
    }

    receivePayment(): void {
        this.token = this.authToken();
        
        console.log(this.token.getToken());
        console.log("Receiving payments via Payonner...");
    }
}