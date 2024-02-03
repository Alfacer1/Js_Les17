const doMath = (x, znak, y) => {
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

const x = parseFloat(prompt("Введіть перше число:"));
let znak = prompt("Введіть математичний оператор (+, -, *, /, %, ^):");
const y = parseFloat(prompt("Введіть друге число:"));

doMath(x, znak, y);
