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




/*------------------------------------------------------------------------*/
/*JAVASCRIPT FUNDAMENTALS - PART 1
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




/*------------------------------------------------------------------------*/
/*JAVASCRIPT FUNDAMENTALS - PART 2*/

/*Coding Challenge #1
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team). A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!

Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and Data 2
5. Ignore draws this time

Test data:
Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
Hints:
To calculate average of 3 values, add them all together and divide by 3
To check if number A is at least double number B, check for A >= 2 * B.
Apply this to the team's average scores
GOOD LUCK

//1.Arrow function to calculate the average of 3 scores
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
//Calling the function, test...
console.log(calcAverage(44,23,71));

//2.Use de calcAverage function to calculate the average for both teams
//Test data 1
let scoreDolphin = calcAverage(44,23,71);
let scoreKoala = calcAverage(65,54,49);
//Calling the function, test...
console.log(scoreDolphin, scoreKoala);

//3.Function checkWinner with the following parameters: avgDolphins, avgKoalas. Also logs "The winner of the match is ...with a total of ... points" if it matches the double points rule.
const checkWinner = function(avgDolphins, avgKoalas) {
    if(avgKoalas * 2 <= avgDolphins) {
        console.log(`The winners of the match are The Dolphins with a total average of ${avgDolphins} points vs ${avgKoalas} points.`);
    } else if(avgDolphins * 2 <= avgKoalas) {
        console.log(`The winners of the match are The Koalas with a total average of ${avgKoalas} points vs ${avgDolphins} points .`);
    } else {
        console.log(`It's a draw!`);
    }
}
//Calling the function, test...
checkWinner(scoreDolphin, scoreKoala);

//4.Function to determine the winner for both Data 1 and Data 2
//Test data 2
scoreDolphin = calcAverage(85,54,41);
scoreKoala = calcAverage(23,34,27);
checkWinner(scoreDolphin, scoreKoala);
*/




/*Coding Challenge #2
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.
Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100

2. And now let's use arrays! So create an array 'bills' containing the test data below

3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before

4. Bonus: Create an array 'total' containing the total values, so the bill + tip
Test data: 125, 555 and 44
Hint: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array)
GOOD LUCK

const billValue = 40;
const tip = billValue <= 300 && billValue >= 50 ? billValue * 0.15 : billValue * 0.2;
console.log(`According to the bill value $${billValue}, the tip you have to leave is $ ${tip}. The total value is $${billValue + tip}`);


//Function expression with conditional (ternary) operator
const calcTip = function(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
}

//Array bills with the test data of the exercise:
const bills = [125,555,44];
//Array with the tip value for each bill, calculated from the function. So, each position will be the function call to calcTip:
const tips = [calcTip(bills[0]), calcTip(bills[1]),calcTip(bills[2])];
//Array with the total values -bill + tip- :
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

//Calling the function
console.log(bills, tips, totals);
*/




/*Coding Challenge #3
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter)

Your tasks:
1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same
method on both objects). Store the BMI value to a property, and also return it from the method
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 mtall.
GOOD LUCK

const mark = {
    fullName : "Mark Miller",
    mass : 78,
    height : 1.69,
    calcBmi: function(){
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}

const john = {
    fullName : "John Smith",
    mass : 92,
    height : 1.95,
    calcBmi: function(){
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}
//Loggin to the console
if(mark.calcBmi() > john.calcBmi()) {
    console.log(`${mark.fullName} BMI (${mark.calcBmi()}) is higher than John's (${john.calcBmi()})!`);
} else {
    console.log(`${john.fullName} BMI (${john.calcBmi()}) is higher than Mark's (${mark.calcBmi()})!`);
}
*/




/*Coding Challenge #4
Let's improve Steven's tip calculator even more, this time using loops!

Your tasks:
1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals').

3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the tips and totals arrays

Bonus:

4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a difficult challenge (we haven't done this before)! Here is how to solve it:

4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values
added together
4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
4.3. Call the function with the 'totals' array
GOOD LUCK


//Arrays
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86 , 52];
let tips = [];
let totals = [];

//Function expression with conditional (ternary) operator
const calcTip = function(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
}
//For loop calling the calcTip function
for(let i = 0; i <= bills.length - 1; i++ ){
    const tip = calcTip(bills[i]);
    //Filling the array the same way but with .push
    tips.push(tip);
    totals.push(tip + bills[i]);
}
console.log(tips, totals);


//Generic function accepts any kind of value. It receives an array of numbers and makes an average
const calcAverage = function(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}
console.log(calcAverage([2,3,6]));
*/




/*DEVELOPER SKILLS AND EDITOR SETUP CHALLENGE
Coding Challenge #1
Given an array of forecasted maximum temperatures, the thermometer displays a
string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1
days ... 21ºC in 2 days ... 23ºC in 3 days ..."
Your tasks:
1. Create a function 'printForecast' which takes in an array 'arr' and logs a
string like the above to the console. Try it with both test datasets.
2. Use the problem-solving framework: Understand the problem and break it up
into sub-problems!
Test data:
§ Data 1: [17, 21, 23]
§ Data 2: [12, 5, -5, 0, 4]
GOOD LUCK
*/
/*
1 Understanding the problem
.Array transformed to string, separated by ...
.What is the x days? Answer: index + 1
2 Breaking up into sub-problems
.Transform array into string
.Transform each element to string with °C
.Strings needs to contain day (index + 1)
.Add ... between elements and start and end of string

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

//Function to forecast
const printForecast = function (arr) {
    //we'll declare an empty string and add the current value of the string while looping
    let str = "";
    for (let i = 0; i < arr.length; i++) {
        str += `${arr[i]}°C in ${i + 1} days ... `;
    }
    console.log("... " + str);
}
//calling the function
printForecast(data1);
*/