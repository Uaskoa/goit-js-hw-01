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
    let inputNotANumber;
    inputNotANumber = Number.isNaN(input);
    console.log(input);
    console.log(inputNotANumber); 

    if (inputNotANumber) {
        alert("Было введено не число, попробуйте еще раз");
        continue;
     }
    
        total += input;
}

message = `Общая сумма чисел равна ${total}`;
alert(message);

// do {
//   input = prompt("Введите число");
// } while (input !== null)

// while (input !== null) {
//     input = prompt("Введите число");
//     // input = Number(input);
//     total += input;
//     console.log(total);

// }

// message = `Общая сумма чисел равна ${total}`;
// alert(message);

// Напиши скрипт который просит посетителя ввести число в prompt до тех пор,
// пока посетитель на нажмет Cancel и каждый раз добавляет введенное значение к
// общей сумме.

// При загрузке страницы пользователю предлагается в prompt ввести число.
// Ввод добавляется к значению переменной total.
// Операция ввода числа продолжается до тех пор, пока пользователь не нажмет кнопку
// ancel в prompt.
// После того как пользователь прекратил ввод нажав кнопку Cancel, показать alert
// со строкой 'Общая сумма чисел равна [сумма]'.
// 🔔 Делать проверку того, что пользователь ввел именно число, а не произвольный
// набор символов, не нужно.Если хочешь, в случае некорректного ввода, показывай
// alert с текстом 'Было введено не число, попробуйте еще раз', при этом результат
// prompt плюсовать к общей сумме не нужно, после чего снова пользователю
// предлагается ввести число в prompt.

// let input;
// let total = 0;
