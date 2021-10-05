//Assignments of every lecture

//LECTURE: Values and Variables

/*1. Declare variables called 'country', 'continent' and 'population' and
assign their values according to your own country (population in millions)*/
/*
let country = "Argentina";
let continent = "America";

let population = 44940000;*/

/*2. Log their values to the console
console.log(country, continent, population);
*/

//LECTURE: Data Types

/*1. Declare a variable called 'isIsland' and set its value according to your country. The variable should hold a Boolean value. Also declare a variable 'language', but don't assign it any value yet
let isIsland = false;
let language;
*/

/*2. Log the types of 'isIsland', 'population', 'country' and 'language'
to the console
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);
*/

//LECTURE: let, const and var

/*1. Set the value of 'language' to the language spoken where you live (some countries have multiple languages, but just choose one)
language = "castellano"; */


/*2. Think about which variables should be const variables (which values will never change, and which might change?). Then, change these variables to const.
const country = "Argentina";
const continent = "America";
const isIsland = false; //My real country is Argentina.*/
/*3. Try to change one of the changed variables now, and observe what happens*/


//LECTURE: Basic Operators
/*1. If your country split in half, and each half would contain half the population, then how many people would live in each half?

let half = population / 2;
console.log(country, " would have ", half, " million people.");
*/

/*2. Increase the population of your country by 1 and log the result to the console
population ++;
console.log(country, " has ", population, " million people.");
*/

/*3. Finland has a population of 6 million. Does your country have more people than Finland?
let finland = 6000000;
console.log(population > finland);
*/

/*4. The average population of a country is 33 million people. Does your country have less people than the average country?
const averagePopulation = 33000000;
console.log(population > averagePopulation);
*/

/*5. Based on the variables you created, create a new variable 'description' which contains a string with this format: 'Portugal is in Europe, and its 11 million people speak portuguese'
let description = country + " is in " + continent + ", " + "and its " + population + " million people speak " + language + ".";
console.log(description);*/

//LECTURE: Strings and Template Literals
/*1. Recreate the 'description' variable from the last assignment, this time
using the template literal syntax

const templateLiteralsDescription = `${country} is in ${continent}, and its ${population} million people speak ${language}.`;
console.log(templateLiteralsDescription);*/


//LECTURE: Taking Decisions: if / else Statements
/*1 If your country's population is greater that 33 million, log a string like this to the console: 'Portugal's population is above average'. Otherwise, log a string like 'Portugal's population is 22 million below average' (the 22 is the average of 33 minus the country's population)
let population = 44940000;
let averagePopulation = 33000000;
if (population > averagePopulation){
    console.log(`Argentina's population is above average.`);
}   else {
    console.log(`Argentina's population is ${averagePopulation - population} million below average.`)
}
*/

/*2 After checking the result, change the population temporarily to 13 and then to 130. See the different results, and set the population back to original
let population = 13;
let averagePopulation = 33000000;
if (population > averagePopulation){
    console.log(`Argentina's population is above average.`);
}   else {
    console.log(`Argentina's population is ${averagePopulation - population} million below average.`)
}
*/

//LECTURE: Type Conversion and Coercion
/*1. Predict the result of these 5 operations without executing them:
a = '9' - '5'; //4 number
b = '19' - '13' + '17';//19 - 13 = 6 + "17" = 617 string
c = '19' - '13' + 17; //19 - 13 = 6 + 17 =  23 number
d = '123' < 57; //False boolean
e = 5 + 6 + '4' + 9 - 4 - 2; //1143 number
*/

/*2. Execute the operations to check if you were right
console.log('9' - '5');
console.log('19' - '13' + '17');
console.log('19' - '13' + 17);
console.log('123' < 57);
console.log(5 + 6 + '4' + 9 - 4 - 2);
*/

/*3. What type of value have
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log(typeof e);
*/



//LECTURE: Equality Operators: == vs. ===
/*1. Declare a variable 'numNeighbours' based on a prompt input like this: prompt('How many neighbour countries does your country have?');
const numNeighbours = prompt("How many neighbour countries does your country have?");
*/

/*2. If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality == for now)
const numNeighbours = prompt("How many neighbour countries does your country have?");
if(numNeighbours == 1){
    console.log("Only 1 border!");
}
*/

/*3. Use an else-if block to log 'More than 1 border' in case 'numNeighbours' is greater than 1
const numNeighbours = prompt("How many neighbour countries does your country have?");
if(numNeighbours == 1){
    console.log("Only 1 border!");
}   else if(numNeighbours > 1) {
    console.log("More than 1 border");
}
*/

/*4. Use an else block to log 'No borders' (this block will be executed when 'numNeighbours' is 0 or any other value)
const numNeighbours = prompt("How many neighbour countries does your country have?");
if(numNeighbours == 1){
    console.log("Only 1 border!");
}   else if(numNeighbours > 1) {
    console.log("More than 1 border");
}   else {
    console.log("No borders");
}
*/

/*5. Test the code with different values of 'numNeighbours', including 1 and 0.*/ 

/*6. Change == to ===, and test the code again, with the same values of 'numNeighbours'. Notice what happens when there is exactly 1 border! Why is this happening?
const numNeighbours = prompt("How many neighbour countries does your country have?");
if(numNeighbours === 1){
    console.log("Only 1 border!");
}   else if(numNeighbours > 1) {
    console.log("More than 1 border");
}   else {
    console.log("No borders");
}
*/
//It happens because the input is a string and it doesn't match the condition of the if. If we want them to be exacly the same, we should convert the input to a number data type with the Number function.


/*7. Finally, convert 'numNeighbours' to a number, and watch what happens now when you input 1
const numNeighbours = Number(prompt("How many neighbour countries does your country have?"));
if(numNeighbours === 1){
    console.log("Only 1 border!");
}   else if(numNeighbours > 1) {
    console.log("More than 1 border");
}   else {
    console.log("No borders");
}*/
//Now the problem is fixed, we transform from a string to a number and it matches with the condition exacly (because of the strict equality operator)

/*8. Reflect on why we should use the === operator and type conversion in this situation.
We should use the strict equality operator because we are less susceptible to bugs.
On the other hand, we could use the loos equality operator if we want to skip the step of converting the string to number*/


//LECTURE: Logical Operators
/*1. Comment out the previous code so the prompt doesn't get in the way*/

/*2. Let's say Sarah is looking for a new country to live in. She wants to live in a country that speaks english, has less than 50 million people and is not an island.

const country = "Canada";
const language = "English";
const population = 40000000;
const territory = "Land";

if(language === "English" && population < 50000000 && territory !== "Island"){
    console.log(`Sarah can live in ${country}!`);
}   else {
    console.log(`${country} doesn't met his requirements. She has to keep searching...`);
}
*/

/*
3. Write an if statement to help Sarah figure out if your country is right for her. You will need to write a condition that accounts for all of Sarah's criteria. Take your time with this, and check part of the solution if necessary.

const country = "Argentina";
const language = "Spanish";
const population = 40000000;
const territory = "Continent";

if(language === "English" && population < 50000000 && territory !== "Island"){
    console.log(`Sarah can live in ${country}!`);
}   else {
    console.log(`${country} doesn't met his requirements. She has to keep searching...`);
}
*/

/*4. If yours is the right country, log a string like this: 'You should live in Portugal :)'. If not, log 'Portugal does not meet your criteria :('

I've already did something similar
*/

/* 5. Probably your country does not meet all the criteria. So go back and temporarily change some variables in order to make the condition true (unless you live in Canada :D)
Done
*/



//LECTURE: The Switch Statement
/*1. Use a switch statement to log the following string for the given 'language': 
chinese or mandarin: 'MOST number of native speakers!' spanish: '2nd place in number of native speakers' 
english: '3rd place' 
hindi: 'Number 4' 
arabic: '5th most spoken language' 
for all other simply log 'Great language too :D'

const language = "spanish";
switch (language) {
    case "chinese":
    case "mandarin":
        console.log("MOST number of native speakers!");
        break;
    case "spanish":
        console.log("2nd place in number of native speakers");
        break;
    case "english":
        console.log("3rd place");
        break;
    case "hindi":
        console.log("Number 4");
        break;
    case "arabic":
        console.log("5th most spoken language");
        break;
    default: 
    console.log("Great language too :D");
}
*/



/*LECTURE: The Conditional (Ternary) Operator
1. If your country's population is greater than 33 million, use the ternary operator to log a string like this to the console: 'Portugal's population is above average'.
Otherwise, simply log 'Portugal's population is below average'. Notice how only one word changes between these two sentences!

argentinaPopulation = 44000000;
averagePopulation = 33000000;
argentinaPopulation > averagePopulation ? console.log(`Argentina's population is above average. Because, the average is ${averagePopulation} and Argentina has ${argentinaPopulation} million people`) : console.log(`Argentina's population is under the average, Argentina is missing ${averagePopulation - argentinaPopulation} million people to be above.`);
*/
/*2. After checking the result, change the population temporarily to 13 and then to 130. See the different results, and set the population back to original
DONE
*/