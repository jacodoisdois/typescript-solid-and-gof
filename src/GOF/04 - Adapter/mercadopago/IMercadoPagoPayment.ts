import Token from "../utils/Token";

export default interface IMecadoPagoPayment {
    authToken(): Token;
    sendPayment(): void;
    receivePayment(): void;
}