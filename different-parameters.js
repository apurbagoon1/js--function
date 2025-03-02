/**
 * Function to check whether a string has an even number of characters
 */
function evenSizedString(str) {
    const size = str.length;
    console.log(str, size);
    if (size % 2 === 0) {
        console.log('even size');
        return true;
    }
    else{
        console.log('odd size');
        return false;
    }
}

evenSizedString('Dhaka');
evenSizedString('faka');

// Function to double or triple a number based on a condition
function doubleOrTriple(number, doDouble){
    if(doDouble === true){
        const result = number * 2;
        return result;
    }
    else{
        const result = number * 3;
        return result;
    }
}

console.log(doubleOrTriple(5, true));
console.log(doubleOrTriple(5, false));

// Function to get the number of elements in an array
function numberOfElements(numbers){
    const len = numbers.length;
    return len;
}

numberOfElements([12, 45, 78,45,121254,4,5])

// Function to get the age property from an object
function getAge(person){
    const age = person.age;
    return age;
}
