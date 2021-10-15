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


function calcAge(birthYear, firstName) {
    const age = 2022 - birthYear;
    console.log(`${firstName} is ${age} years old.`);
    return age;
}

const age = calcAge(1993, "Lautaro");*/




/*INTRODUCTION TO ARRAYS
//Store a name in a variable to use later:
const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";
//Now, lets recreate the same but with arrays:
const friends = ["Michael", "Steven", "Peter"];
console.log(friends);
//Another way of writing arrays, with the array function:
const year = new Array(1991, 1984, 2008, 2020);

//Now lets console the first element of the -friends- array
console.log(friends[0]); //Arrays are zero based, here we indicate the index

//.length property to know the number of elements in the array, or to select the last element without knowing how many elements are inside:
//To know the length
console.log(friends.length);
//To select the last element, because there are x time of elements, but the first one starts on position 0.
console.log(friends[friends.length - 1]); 

//Add elements into the array, using index position:
friends[2] = "Jay";

//We can calculate something, because JavaScript expects an expression always:
const lautaro = ["Lautaro", "Clerici", "Erhardt", 2022 - 1993, "developer", friends];
console.log(lautaro);


//Remake of the calcAge function, but with arrays:
const calcAge = function(birthYear){
    return 2022 - birthYear;
}
//Array of birth years:
const years = [1990, 1967, 2002, 2010, 2018];
//Use the calcAge function and then store the results of calculating the first, second and last ages in a new array:
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);
//Remake of the previous function calls -calcAge(years[0])- into one single array
const ages = [calcAge(years[0]),calcAge(years[1]),calcAge(years[years.length - 1])];
console.log(ages);
*/




/*BASIC ARRAY OPERATIONS (METHODS)
//Example of an array:
const friends = ["Michael", "Steven", "Peter"];

//METHODS TO ADD ELEMENTS: PUSH (back) AND UNSHIFT (front)
//PUSH METHOD, is a function that we call that is attached to the friends array itself, we pass an argument to the function and we use it to add the element to the array. Push method returns the length of the new array:
const newLengthPush = friends.push("Jay");
console.log(friends);
//Push method returns length of new array, we can capture the value storing in a new variable, like we did on the example above: newLength
console.log(newLengthPush);
//UNSHIFT METHOD, function to add an element to the beginning of an array:
const newLengthUnshift = friends.unshift("John");
console.log(friends);
//Unshift method returns length of new array, we can capture the value storing in a new variable, like we did on the example above: newLengthUnshift
console.log(newLengthUnshift);

//METHODS TO REMOVE ELEMENTS: POP (back)
//POP METHOD, removes the last element of the array, in this case we don't pass any argument because is no needed to take the last element. 
const newLengthPop = friends.pop();
console.log(friends); //Jay is gone from the array
//Pop method returns the removed element, if we capture the value on a new variable like we did on the example above: newLengthPop
console.log(newLengthPop);
//SHIFT METHOD, Removes the first element of the array, in this case we don't pass any argument because is no needed to take the first element:
const newLengthShift = friends.shift();
console.log(friends); //John is gone from the array.
//Shift method returns the removed element, if we capture the value on a new variable like we did on the example above: newLengthShift
console.log(newLengthShift);

//METHODS TO GET THE POSITION OF AN ELEMENT
//INDEXOF,tells us the position of an element in the array
console.log(friends.indexOf("Steven"));//Returns the index 1
//INCLUDES,  returns true if the element if the element is in the array and false if it is not. Uses strict equality operator to the comparisonl:
console.log(friends.includes("Pedro"));//Returns false
//Another application of .includes is for conditionals:
if (friends.includes("Peter")) {
    console.log("You have a friend called Peter");
}
*/




/*INTRODUCTION TO OBJECTS
//We have the following array, in arrays, the order is the most important thing because is how we access data. An array is a data structure, and we know that there is no way of giving these elements a name (example: firstName, age, job etc). We can reference them by their order number.
const lautaroArray =[
    "Clerici",
    2022 - 1993,
    "Developer",
    ["Nicolas", "Erhardt"]
];
//The solution is another data structure: Objects, in objects the order of the values not matter. We define key value pairs, and then we can give each of these values a name:
//Object literal syntax is one way of writing objects: variable, curly braces, and next, each key has a value, if it has more than one, they go between brackets:        
const lautaro = {
    firstName: ["Lautaro", "Nicolas"],
    lastName: "Clerici",
    age: 2022 - 1993,
    job: "Developer",
    friends: ["Benja", "Costan"]
};
*/




/*DOT VS BRACKET NOTATION
const lautaro = {
    firstName: ["Lautaro", "Nicolas"],
    lastName: "Clerici",
    age: 2022 - 1993,
    job: "Developer",
    friends: ["Benja", "Costan"]
};
//Dot Notation, way of getting a property from an object.The dot is an operator that get you to the "lautaro" object and retrieves the "lastName" property.
console.log(lautaro.lastName);
//Dot Notation to add new properties to the object
lautaro.location = "Argentina";
lautaro["github"] = "LNCE21";
console.log(lautaro);

//Bracket Notation, way of getting a property from an object, between the brackets we can put any expression that we'd like:
console.log(lautaro["lastName"]);
//Bracket Notation to add new properties to the object

//Challenge
console.log(`${lautaro.firstName} has ${lautaro.friends.length} friends, and his best friend is ${lautaro.friends[0]}`);
*/




/*OBJECT METHODS
//We can add a function to an object as a key value pair, where the value is the function. In other words, a method is a property, and the function is the value:
const lautaro = {
    firstName: ["Lautaro", "Nicolas"],
    lastName: "Clerici",
    birthYear: 1993,
    job: "Developer",
    friends: ["Benja", "Costan"],
    hasDriversLicense: true, 
    //Any function attached to an object is called a method
    calcAge: function(birthYear){
        return 2022 - birthYear;
    }
};
//To access the calcAge property/method, passing "1993" as an argument to the calcAge function:
console.log(lautaro.calcAge(1993));

//A better way of access to the calcAge property/method, but instead of passing "1993" as an argument, we could find a way of passing directly the property that contains that value to not repeat ourselves. We do so, using the -this- variable on the function:
const lautaro = {
    firstName: ["Lautaro", "Nicolas"],
    lastName: "Clerici",
    birthYear: 1993,
    job: "Developer",
    friends: ["Benja", "Costan"],
    hasDriversLicense: true, 
    //This keyword/variable is equal to the object on which the method is called (Is equal to the object calling the method)
    calcAge: function(){
        return 2022 - this.birthYear;
    }
};
//When we use the this. variable we don't need to pass an argument, because it takes it directly from the object
console.log(lautaro.calcAge());

//A better way. Let's supposed that we need the age several times, a better way to not repeat ourselves is to calculate the age 1 time and save the value using this. keyword:
const lautaro = {
    firstName: ["Lautaro", " Nicolas"],
    lastName: "Clerici",
    birthYear: 1993,
    job: "Developer",
    friends: ["Benja", "Costan"],
    hasDriversLicense: true, 
    //This keyword to store a new property on the current object "age" on the object "lautaro"
    calcAge: function(){
        this.age = 2022 - this.birthYear;
        return this.age;
    },

    getSummary: function(){
        return `${this.firstName} is a ${this.calcAge()} years old ${lautaro.job}, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`
    }
};
//When we use the this. variable we don't need to pass an argument, because it takes it directly from the object
console.log(lautaro.calcAge());
//Now that we created a new variable with this keyword, we can call that age property/method, like this:
console.log(lautaro.age);

//Calling getSummary method
console.log(lautaro.getSummary());
*/




/*ITERATION (repetition): THE FOOR LOOP
//Example of repeating the same over and over again:
console.log("Lifting weights on the gym, repetition 1");
console.log("Lifting weights on the gym, repetition 2");
console.log("Lifting weights on the gym, repetition 3");
console.log("Lifting weights on the gym, repetition 4");
console.log("Lifting weights on the gym, repetition 5");
console.log("Lifting weights on the gym, repetition 6");
console.log("Lifting weights on the gym, repetition 7");
console.log("Lifting weights on the gym, repetition 8");
console.log("Lifting weights on the gym, repetition 9");
console.log("Lifting weights on the gym, repetition 10");

//Example of applying the for loop, the for loop statement has 3 parts: 1. Initial value of the counter (in this case is 1) 2. Logical condition evaluated before the code in the loop is executed  (in this case rep bellow or equal to 10) 3. Increase the variable by 1
for(let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights on the gym, repetition ${rep}`);
}
*/





/*LOOPING ARRAYS, BREAKING AND CONTINUING
//Example: Looping through the array (only read and log to console)
const lautaroArray =[
    "Lautaro",
    "Clerici",
    2022 - 1993,
    "Developer",
    ["Benja", "Costan"]
];
//Example: Empty Array (same syntax but without elements/properties). Will be filled with the typeof of every element of the lautaroArray
const types = [];

//To iterate through the lautaroArray with the goal of loggin to the console every element (only to read), the counter variable should start in 1:
for(let i = 0; i <= lautaroArray.length - 1; i++ ){
    console.log(lautaroArray[i]);
    //Filling the array the same way but with .push
    types.push(typeof lautaroArray[i]);
}
//Here we can log to the console the types array after we filled with data
console.log(types);

//Example: Iterate through birth years, calculate age and store in a new array
const years = [1991, 2007, 1969, 2020];
const ages = [];
for(let i = 0; i <= years.length - 1; i++){
    ages.push(2022 - years[i]);
}
console.log(ages);


//Continue Statement: is to exit the current iteration of the loop and continue to the next one.
const lautaroArray =[
    "Lautaro",
    "Clerici",
    2022 - 1993,
    "Developer",
    ["Benja", "Costan"]
];
//Example: print elements to the array that are strings
for(let i = 0; i <= lautaroArray.length - 1; i++ ){
    //Everything which is not a string will be skipped
    if(typeof lautaroArray[i] !== "string") continue;
    console.log(lautaroArray[i], typeof lautaroArray[i]);
}

//Break Statement: is used to completely terminate the whole loop.
//Example: print elements until we found a number. Then, terminate the loop.
for(let i = 0; i <= lautaroArray.length - 1; i++ ){
    //Everything which is not a string will be skipped
    if(typeof lautaroArray[i] == "number") break;
    console.log(lautaroArray[i], typeof lautaroArray[i]);
}
*/




/*LOOPING BACKWARDS AND LOOPS IN LOOPS
const lautaroArray =[
    "Lautaro",
    "Clerici",
    2022 - 1993,
    "Developer",
    ["Benja", "Costan"]
];
//Loop the array, backwards:
for( let i = lautaroArray.length - 1; i >= 0; i--) {
    console.log(lautaroArray[i]);
}

//Loop inside a loop
for (let excercise = 1; excercise <= 3; excercise++) {
    console.log(`Starting excercise N° ${excercise}`);
    for(let rep = 1; rep <= 5; rep++) {
        console.log(`Lifting weights, repetition N° ${rep}`);
    }
}
*/




/*The While Loop
//Example of for loop
for(let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights on the gym, repetition ${rep}`);
}

//We need the same components: counter, condition to stop, increase. But, in the while loop we can only specify a condition, so, the syntax is the following: before the loop we set the counter. Next, we write the while loop specifying the condition, afterwords we write the code to execute and next the increase or decrease. The while loop is more versatile because don't need a counter, the only thing that needs is the condition

//Example of while loop
let rep = 1;
while(rep <= 10) {
    console.log(`Lifting weights on the gym, repetition ${rep}`);
    rep++
};

//Example of while loop without counter. Roll the dice until we roll a six, and then stop.
//first we create a random number between 0 and 1, multiply it by 6 and this will create a decimal number between 0 and 5 (example: 5.033), we add 1 so we get 6, Math.trunc() gets rid of the decimal part. 

let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log (`You finally rolled a ${dice}`);
}
*/

