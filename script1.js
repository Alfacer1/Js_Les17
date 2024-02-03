function averageOfNumbers(arr) {
    let sum = 0;
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number' && !isNaN(arr[i])) {
            sum += arr[i];
            count++;
        }
    }

    if (count === 0) {
        return 0;
    }

    return sum / count;
}

// Приклад
let mixedArray = [1, 'abc', NaN, 2, 'def', 3341, 4, 'ghi'];
let result = averageOfNumbers(mixedArray);
console.log(`Середнє арифметичне числових елементів: ${result}`);
