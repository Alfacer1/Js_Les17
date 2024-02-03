function doMath(x, znak, y) {
    let result;

    switch (znak) {
        case '+':
            result = x + y;
            break;
        case '-':
            result = x - y;
            break;
        case '*':
            result = x * y;
            break;
        case '/':
            result = x / y;
            break;
        case '%':
            result = x % y;
            break;
        case '^':
            result = Math.pow(x, y);
            break;
        default:
            console.log("Невірний оператор.");
            return;
    }

    console.log(`Результат: ${result}`);
}

// Зчитування чисел і оператора від користувача
let x = parseFloat(prompt("Введіть перше число:"));
let znak = prompt("Введіть математичний оператор (+, -, *, /, %, ^):");
let y = parseFloat(prompt("Введіть друге число:"));

// Виклик функції
doMath(x, znak, y);
