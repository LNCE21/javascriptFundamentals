//ACTIVATE STRICT MODE
"use strict";
/*
-----------------------------------------------------------
TOPICS OF HOW JAVASCRIPT WORKS:
High-level overview of JavaScript, The JavaScript Engine and Runtime, Execution Contexts and The Call Stack, Scope and The Scope Chain, Scoping in Practice, Variable Enviroment: Hoisting and The TDZ, Hoisting and TDZ in practice, The this Keyword, Regular Functions Vs. Arrow Functions, Primitives Vs. Objects (Primitive Vs. Reference Types), Primitives Vs. Objects in Practice
-----------------------------------------------------------




/////////////////////////////////////////////////////////////////////////
// SCOPING IN PRACTICE
function calcAge(birthYear) {
    const age = 2022 - birthYear;

    function printAge() {
        //The engine tries to find the "age" variable in the current scope, fails and keeps searching on the parent scope where finally finds it.
        let output = `Hi ${firstName}!, you are ${age} years old, born in ${birthYear}, right?`;
        console.log(output);

        if (birthYear >= 1981 && birthYear <= 1996) {
            var millenial = true;
            // Creating NEW variable with same name as outer scope's variable
            const firstName = 'Steven';

            // Reasssigning/Redefining outer scope's variable
            output = 'NEW OUTPUT!';

            const str = `Oh, and you're a millenial, ${firstName}`;
            console.log(str);

            //Example of functions as block scope starting from ES6 on strict mode
            function add(a, b) {
                return a + b;
            }
        }
        // We can't access the str variable because of the scope chain: console.log(str);

        // We can access millenial because is defined as var, and so, as function scope:
        console.log(millenial);

        // We can't access the add function because of the scope chain, this js file is on strict mode and functions are block scope since ES6 when they are in strict mode: console.log(add(2, 3));

        //We can access output variable because it was declared with function scope, and appears the new output because is called after being reassigned:
        console.log(output);
    }
    //Calling function
    printAge();

    return age;
}
// The variable "firstName" is defined after the "calcAge" function but that's not a problem because is only executed once it's actually called, and it has been called after the "firstN ame" declaration
const firstName = 'Lautaro';
calcAge(1993);
// Here we can't access age variable nor the printAge function here because the scope chain is a one way street: console.log(age); | printAge();




///////////////////////////////////////////////////////////////////////// HOSTING & TDZ IN PRACTICE
//EXAMPLE 1
// This results on "undefined", because variables with var are hoisted to the value of "undefined": console.log(me);
// This results in a reference error because the job variable is a let and by this line is under the temporal dead zone: console.log(job);
// This results in a reference error because the year variable is a const and by this line is under the temporal dead zone: console.log(year);
var me = 'Lautaro';
let job = 'Developer';
const year = 1993;

//EXAMPLE 2
// Log to the console the following functions to test hoisting and tdz:
//This functions well, because is a function declaration: console.log(addDecl(2, 3));
//This results in an error because is declared with const and is not yet outside of the TDZ: console.log(addExpr(2, 3));
//This results in an error because is declared with var and is not yet outside of the TDZ, because variables with var are hoisted to the value of "undefined": console.log(addArrow(2, 3));

//Function Declaration
function addDecl(a, b) {
    return a + b;
}
//Function Expression
const addExpr = function (a, b) {
    return a + b;
};
//Function Arrow
var addArrow = (a, b) => a + b;

//EXAMPLE 3
// Example of declaring using var and not being careful. We want to delete the shopping cart if there are no products, but because of the hoisting, variable numProducts is set to undefined and so, it deletes the shopping cart. To prove it, you can console log numProducts before the logic and you will get "undefined":

//Logic that means when there's no products, delete shopping cart
if (!numProducts) deleteShoppingCart();

//Here we declare the total of products using var to demonstrate why is not a good idea:
var numProducts = 10;
//A fictional function declaration that will delete the shopping cart
function deleteShoppingCart() {
    console.log('All products deleted!');
}

//EXAMPLE 4
//Window is the global object of JavaScript in the browser. Variables declared with let or const do not create properties on the window object:
var x = 1;
let y = 2;
const z = 3;
//Testing if the variable is a property of the window object:
console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
*/



/////////////////////////////////////////////////////////////////////////
// The this Keyword in Practice
console.log(this);

const calcAge = function (birthYear) {
    console.log(2037 - birthYear);
    console.log(this);
};
calcAge(1991);

const calcAgeArrow = birthYear => {
    console.log(2037 - birthYear);
    console.log(this);
};
calcAgeArrow(1980);

const jonas = {
    year: 1991,
    calcAge: function () {
        console.log(this);
        console.log(2037 - this.year);
    },
};
jonas.calcAge();

const matilda = {
    year: 2017,
};

matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const f = jonas.calcAge;
f();
