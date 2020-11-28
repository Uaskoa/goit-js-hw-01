// const ADMIN_PASSWORD = "jqueryismyjam";
// let message;
// const userInput = prompt("Введите пароль");

// console.log(userInput);

// if (userInput === null) {
//   console.log((message = "Отменено пользователем!"));
// } else if (userInput === ADMIN_PASSWORD) {
//   console.log((message = "Добро пожаловать!"));
// } else if (userInput !== ADMIN_PASSWORD) {
//   console.log((message = "Доступ запрещен, неверный пароль!"));
// }

// alert(message);


const ADMIN_PASSWORD = "jqueryismyjam";
let message;
const userInput = prompt("Введите пароль");

// console.log(userInput);

if (userInput === null) {
  message = "Отменено пользователем!";
} else if (userInput === ADMIN_PASSWORD) {
  message = "Добро пожаловать!";
} else if (userInput !== ADMIN_PASSWORD) {
  message = "Доступ запрещен, неверный пароль!";
}

alert(message);


