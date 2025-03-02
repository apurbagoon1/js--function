// Function to double a number
function doubleNumber(num) {
    const doubled = num * 2;
    console.log('Original:', num, '| Doubled:', doubled);
}

console.log('Calling the function now...');
doubleNumber(15);
console.log('------------------');
doubleNumber(88);
console.log('-----------------');
doubleNumber(873);

const myNumber = 55;
doubleNumber(myNumber);

const myMoney = 112;
doubleNumber(myMoney);

// Function to find the difference between two numbers
function findDifference(num1, num2) {
    const difference = num1 - num2;
    console.log(num1, '-', num2, '=', difference);
}

const dadAge = 40;
const myAge = 10;

findDifference(dadAge, myAge);
