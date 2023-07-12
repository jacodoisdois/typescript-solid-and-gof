import PaymentInstrument from "./PaymentInstrument";

export default abstract class NuCard implements PaymentInstrument {

  validate(): void {
    console.log("Validação efetuada!");
  }

  collectPayment(): void {
    console.log("Pagamento efetuado!");
  }
}