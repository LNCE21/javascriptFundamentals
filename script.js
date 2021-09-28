/*Variables

let js = "amazing";
console.log(40 + 8 + 23 - 10);
let firstName = "Jonas";
console.log(firstName);
*/

/* Operators


// Math operators
let now = 2021;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);
console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
//2 ** 3 --> Means 2 to the power of 3 --> 2*2*2

// Plus operator to concatenate strings
const firstName = "Jonas ";
const lastName = "Schmedtmann";
console.log(firstName + lastName);

// Assignment operators
let x = 10 + 5;
console.log(x);
x += 10; // Means x = x + 10
console.log(x); 
x *= 4;  // Means x = x * 4
x ++ //Means x + 1

// Comparison operators
// <  > =  >=  <= 
console.log(ageJonas > ageSarah); 
console.log(ageSarah >= 18);
*/

/*Operator Precedence
console.log(now- 1991 > now - 2018);
//both parts are resolved before the comparison operator of the middle, because it has more precedence.

//The result is 10 because is a Left to right exectution
//console.log(25 - 10 - 5);

//Assignments are a right to left exectution
let x, y; //Here I am declaring 2 empty variables
x = y = 25 - 10- 5; // Subtraction operator has more precedence, so it's executed from left to right. And after that, assignments are executed from right to left, that's why y is assigned first.
console.log(x, y); //x and y are both 10
*/

/*Strings and Templates literals 

//Creating variables to concatenate into one big string
const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;
//Now concatenate into a string

const jonas = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!" ; 
console.log(jonas);

//The same as before but this time with template literals instead of strings
const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(jonasNew);

//Using \n\ for multiline strings
console.log("String with \n\
multiple \n\
lines");

//Using template literal's backticks for multiline strings
console.log(`String
multiple 
lines`)*/ 

/*Taking decisions: if /else Statements

//Write a program which checks if a person is allowed to take drivers license and how many years are left.
const age = 15;
if(age >= 18) {
    console.log("Sarah can start driving license🎓");
}   
    else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young, wait ${yearsLeft} years.`)
}   


//Let's create a variable conditionally so we don't always use console.log
const birthYear = 1991;
let century;
if(birthYear <= 2000) {
    century = 20;
}   else {
        century = 21;
    }

console.log(century);
*/