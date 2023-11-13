function doMath(x, znak, y) {
    let result;

    switch (znak) {
        case '+': result = x + y; break;
        case '-': result = x - y; break;
        case '*': result = x * y; break;
        case '/': result = x / y; break;
        case '%': result = x % y; break;
        case '^': result = Math.pow(x, y); break;
        default: console.log('Непідтримуваний знак'); return;
    }

    console.log(`Результат: ${result}`);
}

let x = parseFloat(prompt('Введіть значення x:'));
let znak = prompt('Введіть математичний знак (+, -, *, /, %, ^):');
let y = parseFloat(prompt('Введіть значення y:'));

doMath(x, znak, y);
