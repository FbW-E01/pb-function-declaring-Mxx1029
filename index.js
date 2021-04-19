// #### 1. Multiply - Function Declaration
// * Create a function that multiples a number by another number.

function multiply(num1, num2) {
    console.log(num1 * num2);
};

multiply(2, 3);

// #### 2. Multiply - Function Declarations as Values
// * Rework the syntax of the above function so that the function declaration is stored as a value.

const product = function(num1, num2) {
    console.log(num1 * num2);
};

product(3, 4);

// #### 3. Multiply - Arrow Function
// * Rework the syntax of the function declaration so that is uses the arrow function shorthand.

const product2 = (num1, num2) => {
    console.log(num1 * num2);
};

product2(5, 6);

// #### 4. Declarations
// * Create functions (using all three declarations) to check the remainder of division given two numbers. 

function checkRemainder(num1, num2) {
    (num1 % num2 === 0) ? console.log(num1 + " is divisible by " + num2 + ".") : console.log(num1 + " is not divisible by " + num2 + ".");
};

checkRemainder(15, 2);

const checkDivisbility = function(num1, num2) {
    (num1 % num2 === 0) ? console.log(num1 + " is divisible by " + num2 + ".") : console.log(num1 + " is not divisible by " + num2 + ".");
};

checkDivisbility(12, 3);

const checkDivisbilityAgain = (num1, num2) => {
    (num1 % num2 === 0) ? console.log(num1 + " is divisible by " + num2 + ".") : console.log(num1 + " is not divisible by " + num2 + ".");
};

checkDivisbilityAgain(17, 3);