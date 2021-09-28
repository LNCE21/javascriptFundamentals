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