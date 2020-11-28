let cost;
let message;
const userInput = prompt("Введите страну доставки");
const normalizedInput = userInput.toLowerCase();

// const normilizedСountry =
//   userСountry.charAt(0).toUpperCase() + userСountry.slice(1);

console.log(normalizedInput);

switch (normalizedInput) {
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

 alert (message)

// // Пользователь может оформить доставку товара к себе в страну, указав ее при
// // посещении страницы в prompt.Учти, пользователь может ввести имя страны не только
// // буквами нижнего регистра, а к примеру 'кИтАЙ'.

// // Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну.
// // Обязательно используй switch.Формат сообщения: 'Доставка в [страна] будет стоить
// // цена] кредитов'.

// // Но доставка есть не везде, если указанной страны нет в списке, то выводи в
// // alert сообщение 'В вашей стране доставка не доступна'.

// // Ниже приведен список стран и стоимость доставки.

// // Китай - 100 кредитов
// // Чили - 250 кредитов
// // Австралия - 170 кредитов
// // Индия - 80 кредитов
// // Ямайка - 120 кредитов


// let cost;
// const subscription = 'premium';

// switch (subscription) {
//   case 'free':
//     cost = 0;
//     break;

//   case 'pro':
//     cost = 100;
//     break;

//   case 'premium':
//     cost = 500;
//     break;

//   default:
//     console.log('Invalid subscription type');
// }

// console.log(cost); // 500