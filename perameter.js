// Function to eat rice
function eatRice() {
    console.log('Wash your hands first');
    console.log('Sit down');
    console.log('Take food on your plate');
    console.log('Eat properly and enjoy');
}

// eatRice();

// Function to calculate square of a number
function square(num) {
    console.log('Given number:', num);
    const squaredValue = num * num;
    console.log('Square of the number:', squaredValue);
}

square(4);
console.log('--------------');
square(12);
square(5);
square(405);

// Function to add two numbers
function sum(num1, num2) {
    const total = num1 + num2;
    console.log('Sum:', total);
}

sum(5, 71);
sum(65, 31);

// Function to add multiple numbers
function totalSum(a, b, c, d, e = 0) {
    const total = a + b + c + d + e;
    console.log('Numbers provided:', a, b, c, d, e);
    console.log('Total sum:', total);
}

totalSum(3, 4, 6, 7);
totalSum(3, 4, 6, 7, 8);
