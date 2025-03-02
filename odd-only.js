/**
 * Create function that will return only the odd numbers
 * Return the sum of odd numbers
 */

function oddNumbersOnly(numbers) {
    const odds = [];
    for (const number of numbers) {
        if (number % 2 !== 0) {
            console.log(number);
            odds.push(number);
        }
    }
    return odds;
}

const numbers = [5, 8, 91, 24, 6];
// const odds = oddNumbersOnly(numbers);
// console.log('odd numbers are', odds);

function sumOfOddNumbers(numbers) {
    let sum = 0;
    for (const number of numbers) {
        if (number % 2 !== 0) {
            console.log(number);
            sum = sum + number;
        }
    }
    return sum;
}

const sum = sumOfOddNumbers(numbers);

console.log('sum of the odd numbers is', sum);
