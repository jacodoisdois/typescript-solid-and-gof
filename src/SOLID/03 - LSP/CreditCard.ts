import NuCard from "./NuCard";

export default class CreditCard extends NuCard {

  validate(): void {
    console.log("Verificando limite do cartão...");
  }

}