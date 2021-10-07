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
*/

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

//Another example of a function is the console.log function, it is another built-in function were we pass