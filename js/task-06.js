let input;
let total = 0;
let message;

while (true) {
  input = prompt("Введите число");

  if (input === null) {
    console.log("Отменено пользователем");
    break;
  }

  input = Number(input);
  const inputNotANumber = Number.isNaN(input);
   

  if (inputNotANumber) {
    alert("Было введено не число, попробуйте еще раз");
    continue;
  }

  total += input;
}

message = `Общая сумма чисел равна ${total}`;
alert(message);
