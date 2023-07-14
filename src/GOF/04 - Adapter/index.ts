import PayonnerAdapter from "./adapters/PayonnerAdapter";
import Payonner from "./payonner/Payonner";
import IPaypalPayment from "./paypal/IPaypalPayment";
import Paypal from "./paypal/Paypal";

const payonner: Payonner = new Payonner();
const payment: IPaypalPayment = new PayonnerAdapter(payonner);

payment.paypalPayment();
payment.paypalReceive();