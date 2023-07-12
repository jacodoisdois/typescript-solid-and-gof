export default interface PaymentInstrument {
  validate(): void;
  collectPayment(): void;
}