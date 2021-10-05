"use strict";
//Challenges of every section

/*
Instructions
The Complete JavaScript Course contains over 25 coding challenges for you to
practice the concepts we learn in each section, on your own. This is a
fundamental part of your learning journey.
This document contains all coding challenges in this course, so that you can
read the challenge text without watching the video (I still recommend watching the videos because I might give some additional clues).
Some challenges require some starting code, which you can get from this
document instead of copying it from the videos.
The solution of each challenge is in the videos themselves, so you still have to go watch them.
Some of the later challenges are quite difficult on purpose (after all, they are called challenges, right?). If one of them is too difficult, don’t worry, this is completely normal! Just start watching the solution, then pause the video, and keep working on your own. Struggling is part of the journey, but you can do it */

/*JavaScript Fundamentals – Part 1



Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula: BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).

Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John. 

Test data: 
Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
GOOD LUCK*/

/*SOLUTION
//1. Store Mark's and John's mass and height in variables

let markWeight = 78; //In kg
let markHeight = 1.69; //In centimeters
let johnWeight = 92;
let johnHeight = 1.95;

//2. Calculate both their BMIs using the formula (you can even implement both versions)
//BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).
console.log(markWeight / (markHeight * markHeight));
console.log(markWeight / (markHeight ** 2));

console.log(johnWeight / (johnHeight * johnHeight));
console.log(johnWeight / (johnHeight ** 2));

//3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John. 
let markBmi = markWeight / (markHeight ** 2);
let johnBmi = johnWeight / (johnHeight ** 2);
let markHigherBMI = markBmi > johnBmi;
console.log(markHigherBMI);
*/



/*
Coding Challenge #2
Use the BMI example from Challenge #1, and the code you already wrote, and improve it. Your tasks:

SOLUTION
//1. Print a nice output to the console, saying who has the higher BMI. The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
//Declaring variables
let markWeight = 78; //In kg
let markHeight = 1.69; //In centimeters
let johnWeight = 92;
let johnHeight = 1.95;
let markBmi = markWeight / (markHeight ** 2);
let johnBmi = (johnWeight / (johnHeight * johnHeight));

//Previus way of showing result with boolean value
let markHigherBMI = markBmi > johnBmi;
console.log(markHigherBMI);

//Improving the excercise with if else statements and template literals
if (markBmi > johnBmi) {
    console.log(`Mark's BMI is higher than John's!`);
}   else {
    console.log(`John's BMI is higher than Mark's!`);
}

SOLUTION
//2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!" Hint: Use an if/else statement. GOOD LUCK  
if (markBmi > johnBmi) {
    console.log(`Mark's BMI (${markBmi}) is higher than John's (${johnBmi})!`);
}   else {
    console.log(`John's BMI (${johnBmi}) is higher than Mark's (${markBmi})!`);
}
*/

/*
//TRY THIS!
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
function isHigher(markBmi, johnBmi) {
  return markBmi > johnBmi
    ? `Mark's BMI (${markBmi}) is higher than John's (${johnBmi})!`
    : `John's BMI (${johnBmi}) is higher than Mark's (${markBmi})!`;
}
console.log(isHigher(2, 1));
*/

/*Coding Challenge #3
//There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy! Your tasks:

//1. Calculate the average score for each team, using the test data below
const scoreDolphinsData1 = (96 + 108 + 89) / 3;//97.66
const scoreKoalasData1 = (88 +91 +110) / 3;//96.33

const scoreDolphinsData2 = (97 + 112 + 101) / 3;//103.33
const scoreKoalasData2 = (109 + 95 + 123) / 3;//109

const scoreDolphinsData3 = (97 + 112 + 101) / 3;//103.33
const scoreKoalasData3 = (109 + 95 + 106) / 3;//103.33
*/

/*2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score)

if(scoreDolphinsData1 > scoreKoalasData1) {
    console.log("The dolphins are the winners of the competition!");
} else if(scoreDolphinsData1 < scoreKoalasData1){
    console.log("The Koalas are the winners of the competition!");
} else{
    console.log("It's a draw!");
}
*/

/* 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks

const minimumScore = 100;

if(scoreDolphinsData2 > scoreKoalasData2 && scoreDolphinsData2 >= minimumScore) {
    console.log("The dolphins are the winners of the competition!");
} else if(scoreDolphinsData2 < scoreKoalasData2 && scoreKoalasData2 >= minimumScore){
    console.log("The Koalas are the winners of the competition!");
} else{
    console.log("It's a draw!");
}
*/

/*4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy

const scoreDolphinsData2 = (97 + 112 + 101) / 3;//103.33
const scoreKoalasData2 = (109 + 95 + 123) / 3;//109
const minimumScore = 100;
if(scoreDolphinsData2 > scoreKoalasData2 && scoreDolphinsData2 >= minimumScore) {
    console.log("The dolphins are the winners of the competition!");
} else if(scoreDolphinsData2 < scoreKoalasData2 && scoreKoalasData2 >= minimumScore){
    console.log("The Koalas are the winners of the competition!");
} else if(scoreDolphinsData2 >= minimumScore && scoreKoalasData2 >= minimumScore){
    console.log("It's a draw!");
}
*/
/*Test data:
Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
GOOD LUCK*/



/*Coding Challenge #4
Steven wants to build a very simple tip calculator for whenever he goes eating in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%. Your tasks:*/

/*1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)

const billValue = 275;
billValue >= 50 && billValue <= 300 ? console.log(`According to the bill value $${billValue}, the tip you have to leave is $ ${billValue * 0.15}. The total value is $${billValue + billValue * 0.15}`) : console.log(`According to the bill value $${billValue}, the tip you have to leave is $ ${billValue * 0.2}. The total value is $${billValue + billValue * 0.2}`); */

/*More efficient way of solving it
const billValue = 40;
const tip = billValue <= 300 && billValue >= 50 ? billValue * 0.15 : billValue * 0.2;
console.log(`According to the bill value $${billValue}, the tip you have to leave is $ ${tip}. The total value is $${billValue + tip}`) 
*/

/*2. Print a string to the console containing the bill value, the tip, and the final value
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
316.25”
Test data:
Data 1: Test for bill values 275, 40 and 430
Hints:
To calculate 20% of a value, simply multiply it by 20/100 = 0.2
Value X is between 50 and 300, if it's >= 50 && <= 300 �
GOOD LUCK

DONE
*/