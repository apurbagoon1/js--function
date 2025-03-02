/**
 * Task-2
Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.
 */

const oddEvenOperations = function(number) {
    if (number % 2 === 0) {
        return number / 2;  
    } else {
        return number * 2;  
    }
};

const evenOperationResult = oddEvenOperations(4);
console.log('Even operation result:', evenOperationResult); 

const oddOperationResult = oddEvenOperations(5);
console.log('Odd operation result:', oddOperationResult); 
