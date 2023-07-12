import NuCard from "./NuCard";

export default class DebitCard extends NuCard {

  validate(): void {
    console.log("Validando saldo...");
  }

}