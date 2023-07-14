import MercadoPagoAdapter from "./adapters/MercadoPagoAdapter";
import PayonnerAdapter from "./adapters/PayonnerAdapter";
import MercadoPago from "./mercadopago/MercadoPago";
import Payonner from "./payonner/Payonner";
import IPaypalPayment from "./paypal/IPaypalPayment";
import Paypal from "./paypal/Paypal";

const payonner: Payonner = new Payonner();
const payment: IPaypalPayment = new PayonnerAdapter(payonner);

payment.paypalPayment();
payment.paypalReceive();



const mercadopago: MercadoPago = new MercadoPago();
const paymentMercadoPago: IPaypalPayment = new MercadoPagoAdapter(mercadopago);

paymentMercadoPago.paypalPayment();
paymentMercadoPago.paypalReceive();