/**
 * Task-5
Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd
 */

const oddEven = function(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
};

const evenCheckResult = oddEven(6);
console.log('Even check result:', evenCheckResult); 

const oddCheckResult = oddEven(7);
console.log('Odd check result:', oddCheckResult); 
