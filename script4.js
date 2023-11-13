function removeCharacters(inputString, charactersToRemove) {
    const result = inputString
        .split('')
        .filter(char => !charactersToRemove.includes(char))
        .join('');

    return result;
}

const inputString = " hello world";
const charactersToRemove = ['l', 'd'];
const result = removeCharacters(inputString, charactersToRemove);
console.log(result);