/**
 * Task-4
Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.
 */

const countZero = function(binaryString) {
    let zeroCount = 0;
    for (let char of binaryString) {
        if (char === '0') {
            zeroCount++;
        }
    }
    return zeroCount;
};

const zeroCountResult = countZero('1010010010');
console.log('Zero count in binary string:', zeroCountResult); 
