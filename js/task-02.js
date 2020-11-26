const total = 100;
const ordered = 130;

// let message;

// if (ordered > total) {
//   console.log(message = "На складе недостаточно товаров!");
// } else {
//   console.log(message = "Заказ оформлен, с вами свяжется менеджер");
// }


const message =
  ordered > total
    ? "На складе недостаточно товаров"
    : "Заказ оформлен, с вами свяжется менеджер";
    
console.log(message);