//ACTIVATE STRICT MODE
"use strict";
/*
-----------------------------------------------------------
TOPICS OF HOW JAVASCRIPT WORKS:
High-level overview of JavaScript, The JavaScript Engine and Runtime, Execution Contexts and The Call Stack, Scope and The Scope Chain, Scoping in Practice, Variable Enviroment: Hoisting and The TDZ, Hoisting and TDZ in practice, The this Keyword, Regular Functions Vs. Arrow Functions, Primitives Vs. Objects (Primitive Vs. Reference Types), Primitives Vs. Objects in Practice
-----------------------------------------------------------
*/

// Scoping in Practice

function calcAge(birthYear) {
    const age = 2037 - birthYear;

    function printAge() {
        let output = `${firstName}, you are ${age}, born in ${birthYear}`;
        console.log(output);

        if (birthYear >= 1981 && birthYear <= 1996) {
            var millenial = true;
            // Creating NEW variable with same name as outer scope's variable
            const firstName = 'Steven';

            // Reasssigning outer scope's variable
            output = 'NEW OUTPUT!';

            const str = `Oh, and you're a millenial, ${firstName}`;
            console.log(str);

            function add(a, b) {
                return a + b;
            }
        }
        // console.log(str);
        console.log(millenial);
        // console.log(add(2, 3));
        console.log(output);
    }
    printAge();

    return age;
}

const firstName = 'Jonas';
calcAge(1991);
// console.log(age);
// printAge();

