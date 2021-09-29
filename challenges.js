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

/*SOLUTION
Coding Challenge #2
Use the BMI example from Challenge #1, and the code you already wrote, and improve it. Your tasks:

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

//2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!" Hint: Use an if/else statement. GOOD LUCK  
if (markBmi > johnBmi) {
    console.log(`Mark's BMI (${markBmi}) is higher than John's (${johnBmi})!`);
}   else {
    console.log(`John's BMI (${johnBmi}) is higher than Mark's (${markBmi})!`);
}
*/



