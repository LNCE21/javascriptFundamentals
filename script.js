//Note taking from the course

/*VARIABLES

let js = "amazing";
console.log(40 + 8 + 23 - 10);
let firstName = "Jonas";
console.log(firstName);
*/



/*OPERATORS

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



/*OPERATOR PRECEDENCE
console.log(now- 1991 > now - 2018);
//both parts are resolved before the comparison operator of the middle, because it has more precedence.

//The result is 10 because is a Left to right exectution
//console.log(25 - 10 - 5);

//Assignments are a right to left exectution
let x, y; //Here I am declaring 2 empty variables
x = y = 25 - 10- 5; // Subtraction operator has more precedence, so it's executed from left to right. And after that, assignments are executed from right to left, that's why y is assigned first.
console.log(x, y); //x and y are both 10
*/



/*STRINGS AND TEMPLATE LITERALS

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



/*IF ELSE STATEMENTS AND TEMPLATE LITERALS

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


/*TYPE CONVERSION & TYPE COERCION

/*Type conversion
Example -Conversion String to Number- the wrong way. 
Imagine we have an input string, it won't sum 18 to 1991, it will concatenate a number at the end of the string:*/
/*
const inputYear = "1991";
console.log(inputYear + 18); //Result on console: 199118
*/

//Example -Conversion String to Number- with Number function. To fix this error from above and be able to sum 18 to 1991 we need to convert this string into a number with the Number function
/*
const inputYear = "1991"; //This keeps being a string
console.log(inputYear + 18); 
console.log(Number(inputYear) + 18); //This gives us a converted version
*/

//Example -Conversion Number to String- with String function.
/*
console.log(String(1991) + inputYear);//Conversion of 1991 to string
*/

//NaN error: Not a Number is the result that appears on the console whenever an operation that involves numbers fails to produce a new number. Not a Number means "invalid number"
/*
console.log(Number("Jonas")); //Jonas can't be converted to a number
*/

/*Type coercion
console.log("I'am " + 23 + " years old");//Plus operator converts numbers to strings
console.log("23" - "10" - 3); //Minus operator converts strings to numbers
console.log("23" * "2");//Multiplier and divider converts strings to numbers
console.log("23" > "18"); //Logical converts strings to numbers

//Exercise 1:
let n = "1" + 1; //Type Coercion converts 1 to string so = 11(string)
n = n - 1; //Type Coercion converts 11string to number so = 10(number)
console.log(n); //Result, 10 number
//Exercise 2:
let m = 2 + 3 + 4; //Sums every number = 9
m = m + "5"; //Type Coercion converts 9 to string and concatenates 5 = 95
console.log(m);//Result 95 string
*/



/*TRUTHY AND FALSY VALUES 
//Here we write some examples of them
console.log(Boolean(0));//Falsy
console.log(Boolean(undefined));//Falsy
console.log(Boolean("Jonas")); //String, Truthy
console.log(Boolean({}));//Empty object, true
console.log(Boolean(""));//Empty string Falsy

//Example 1: when we have a logical context (if else), JavaScript will apply Typed Coercion and will convert the value so that can execute the code. But, in this case 0 can't be transformed into a boolean, so it will be "falsy" or in other words "false"
const money = 0;
if (money) {
    console.log("Don't spend it all!")
}   else {
    console.log("You should get a job!");
}

//Example 2: to check if a variable is defined or not.
let height; //Undefined so, will be a falsy value when converted to boolean
if (height) {
    console.log("Yay! Height is defined");
}   else {
    console.log("Height is Undefined");
}
*/



/*EQUALITY OPERATORS: == AND ===
//Strict equality operator, it has to be exactly the same to be true. It is strict because doesn't use type coercion. 
const age = 18;
if (age === 18) {
    console.log("You just become 18!");
}
*/

/*Loose equality operator. Triggers Type Coercion
const age = "18"; //Value Data type: Number
if (age == 18) { //It's not exacly the same, it's a string
    console.log("You just become 18!"); //But the result it's true because of the operator.
}


//prompt function to get a value from a webpage and a variable to store the value
const favourite = prompt("What's your favorite number?");
console.log(favourite); //Stores the number but as a string

//Example of using Loose equality operator so that we can use the string to a number
if (favourite == 23) {
    console.log("Cool! 23 is an amazing number!");
}

//Example of using Number function to avoid using loose equality operator.
const favourite = Number(prompt("What's your favorite number?"));
if (favourite === 23) {
    console.log("Cool! 23 is an amazing number!");
}

//Example of using more conditions -else if-
const favourite = Number(prompt("What's your favorite number?"));
if (favourite === 23) {
    console.log("Cool! 23 is an amazing number!");
} else if(favourite === 7) {
    console.log("7 is also an amazing number!");
}   else {
    console.log("Number is not 23 or 7");
}

//Different operator != (loose version) !== (strict version)
if(favourite !== 23) {
    console.log("Why not 23?");
}
*/


/*LOGICAL OPERATORS
const hasDriverLicense = true;//Variable A
const hasGoodVision = false;//Variable B

//and and or operatores
console.log(hasDriverLicense && hasGoodVision); //AND operator
console.log(hasDriverLicense || hasGoodVision); //OR operator
console.log(!hasDriverLicense); //NOT operator

//Taking the previous variables to make a decision. Sarah should drive?

if(hasDriverLicense && hasGoodVision) {
    console.log("Sarah is able to drive!");
}   else{
    console.log("Someone else should drive...");
}

//Let's answer the same question but taking in consideration if it's tired
const isTired = true; //Variable C
//Sarah is able to drive if she has a license, good vision and if she is not tired.
if(hasDriverLicense && hasGoodVision && !isTired) {
    console.log("Sarah is able to drive!");
}   else{
    console.log("Someone else should drive...");
}
*/



/*SWITCH STATEMENTS: alternative way to write an if-else statement when all we want to do is to compare one value to multiple different options

//In the next example we are going to map one activity to each day:
const day = "monday";
//This switch statement will compare "day" to "monday" in a strict equality way 
switch(day) {
    case "monday":
        console.log("Plan course structure");
        console.log("Go to coding meetup") ;
        break;
    case "tuesday":
        console.log("Prepare theory videos");
        break;
    case "wednesday":
    case "thursday":
        console.log("Write code examples");
        break;
    case "friday":
        console.log("Record videos");
        break;
    case "saturday":
    case "sunday":
        console.log("Enjoy the weekend")
        break;
    default:
        console.log("Not a valid day!");
}
*/