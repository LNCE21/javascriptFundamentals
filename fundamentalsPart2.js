//ACTIVATE STRICT MODE
"use strict";
/*
-----------------------------------------------------------
TOPICS OF PART TWO (start line 347): Functions, Function declaration vs Expressions, Arrow Functions, Functions calling other functions, Reviewing Functions, Arrays, Basic Array operations (methods), Introduction to objects, Dot vs Bracket Notation, Object Method, Iteration: the for loop, Looping arrays - breaking and continuing, Looping backwards and Loops in Loops, The while loop
-----------------------------------------------------------
*/

/*STRICT MODE
//Example, if we make an intentional error we will see how the console on the browser will show us where is the error.
let hasDriversLicense = false;
const passTest = true;
if(passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive :D");
*/



/*FUNCTIONS
//Example of logger function, a function that logs into the console.

//Syntax: function keyword, name of function, ();, next follows the curly braces, all the code inside them are part of the "function body" and its the code that will be executed every time we call the function.
function logger() {
    console.log("My name is Lautaro");
}

//Invoking/running/calling the function, we simply write the name with ();
logger();


//Example of function with parameters, return
function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
} 


//Invoke, call, run the function fruitProcessor by adding arguments (the values of the parameters)
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

//Invoke, call, run the function fruitProcessor by adding a different arguments
const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

//Another example of a function is the Number function, is a built-in function, we pass a string as s parameter and returns a number:
Number("23");

//Another example of a function is the console.log function, it is another built-in function were we pass*/




/*FUNCTION DECLARATIONS VS. EXPRESSIONS
//In JavaScript, functions are like values, meaning that they can be stored in variables. 

//Example Function Declaration to calculate age on a given birth year. We can actually call function declarations before they are defined in the code, even if it’s not a good idea.
function calcAge1(birthYear) {
    return 2022 - birthYear;
}
const age1 = calcAge1(1993);
console.log(age1);

//Example Function Expression: As all the expressions, it produces a value. So, we write the function without a name but instead, we store the value on a variable. The main difference is that we cannot call the function before its define, it forces you to keep a nice structure (define all the functions first at the top of the code, and only then call them):
const calcAge2 = function (birthYear) {
    return 2022 -birthYear;
}
const age2 = calcAge2(1993);
console.log(age2);
*/



/*ARROW FUNCTIONS  
It is a special form of function expression that is shorter, and therefore faster to write. It's called arrow function because its part of the syntax:

//Example of arrow function to calculate the age:
const calcAge3 = birthYear => 2022 - birthYear;
//Calling the function
const age3 = calcAge3(1993);
//Log in the console.
console.log(age3);


//Example how many years left until retirement, we need more than one line of code, and for that matter we are going to need return:
const yearsUntilRetirement = birthYear => {
    const age = 2022 - birthYear;
    const retirement = 65 - age;
    return retirement;
}
//Calling the function
console.log(yearsUntilRetirement(1993));


//Example arrow function with more than one parameter:
const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2022 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years.`;
}
//Calling the function by passing arguments
console.log(yearsUntilRetirement(1993, "Lautaro"));
*/




/*FUNCTIONS CALLING OTHER FUNCTIONS

//Example of function calling other functions. One function will process the fruits into small pieces. The other one, will recieve a pieces of apples and oranges, and next, produces and return juice.

//This function cuts the fruit in 4 pieces and returns the value.
function cutFruitPieces(fruit) {
    return fruit * 4;
}
//This function of the fruit processor will cut the received apples and oranges in 4 pieces. To achieve this we need to call the function from above -cutFruitPieces- inside the function fruitProcessor:
function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
    return juice;
} 
//Calling the fruitProcessor function with the arguments 2 and 3 and logg to the console.
console.log(fruitProcessor(2, 3));
*/




/*REVIEWING FUNCTIONS
//Example remaking an arrow function:
const calcAge = function(birthYear){
    return 2022 - birthYear;
}
//Main function calling the above function
const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if(retirement > 0) {
        return `${firstName} retires in ${retirement} years.`;
    }   else {
        return `${firstName} has already retired.` 
    }
}
//Calling the function
console.log(yearsUntilRetirement(1993, "Lautaro"));
*/