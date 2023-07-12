import PaymentInstrument from "./PaymentInstrument";

export default class NuRewards implements PaymentInstrument{

    validate():void{
        console.log("Validating your quantity of reward points");
    }

    collectPayment(): void {
        console.log("Paying with reward points");
    }
}