import CreditCard from "./CreditCard";
import DebitCard from "./DebitCard";
import NuRewards from "./NuRewards";

const card = new CreditCard();

card.validate();
card.collectPayment();

const debitCard = new DebitCard();

debitCard.validate();
debitCard.collectPayment();


const rewardCard = new NuRewards();

rewardCard.validate();
rewardCard.collectPayment();