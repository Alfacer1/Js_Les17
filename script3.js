function fillArray() {
    let rows = parseInt(prompt("Введіть кількість рядків:"));
    let cols = parseInt(prompt("Введіть кількість стовпців:"));

    let twoDimArray = [];

    for (let i = 0; i < rows; i++) {
        let innerArray = [];

        for (let j = 0; j < cols; j++) {
            let userInput = prompt(`Введіть значення для елемента (${i + 1}, ${j + 1}):`);
            innerArray.push(userInput);
        }

        twoDimArray.push(innerArray);
    }

    return twoDimArray;
}

let resultArray = fillArray();
console.log(resultArray);
