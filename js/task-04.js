let credits = 23580;
const pricePerDroid = 3000;
let purchaseQuantity = prompt("Введите количество дроидов");
let message;
let totralPrice;

console.log(purchaseQuantity);

if (purchaseQuantity === null) {
  console.log("Отменено пользователем!");
} else {
  purchaseQuantity = Number(purchaseQuantity);
  totralPrice = pricePerDroid * purchaseQuantity;
  console.log(totralPrice);
  if (totralPrice > credits) {
    console.log("Недостаточно средств на счету!");
  } else {
    credits -= totralPrice;
    message = `Вы купили ${purchaseQuantity} дроидов, на счету осталось ${credits} кредитов`;
    alert(message);
  }
}
