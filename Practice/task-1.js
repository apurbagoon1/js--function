/**
 * Task-1
Take four parameters. Multiply the four numbers and then return the result
 */

const multiplyFourNumbers = function(num1, num2, num3, num4) {
    const result = num1 * num2 * num3 * num4;
    return result;
};

const multiplicationResult = multiplyFourNumbers(2, 3, 4, 5);
console.log('Multiplication result:', multiplicationResult); 
