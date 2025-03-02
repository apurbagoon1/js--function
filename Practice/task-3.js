/**
 * Task-3
Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
 */

const makeAvg = function(arr) {
    const sum = arr.reduce((acc, num) => acc + num, 0);
    return sum / arr.length;
};

const averageResult = makeAvg([1, 2, 3, 4, 5]);
console.log('Average result:', averageResult); 
