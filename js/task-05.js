let cost;
let message;
let userInput = prompt("Введите страну доставки");


if (userInput !== null) {
  userInput = userInput.toLowerCase;

  switch (userInput) {
    case "китай":
      cost = 100;
      message = `Доставка в ${normalizedInput} будет стоить ${cost} кредитов.`;
      break;

    case "чили":
      cost = 250;
      message = `Доставка в ${normalizedInput} будет стоить ${cost} кредитов.`;
      break;

    case "австралия":
      cost = 170;
      message = `Доставка в ${normalizedInput} будет стоить ${cost} кредитов.`;
      break;

    case "индия":
      cost = 80;
      message = `Доставка в ${normalizedInput} будет стоить ${cost} кредитов.`;
      break;

    case "ямайка":
      cost = 120;
      message = `Доставка в ${normalizedInput} будет стоить ${cost} кредитов.`;
      break;

    default:
      message = "В вашей стране доставка не доступна";
  }

  alert(message);

} else {

  alert("Вы отменили доставку");
}
