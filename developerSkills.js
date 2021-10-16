'use strict';
/*PROBLEM 1
We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error"


1.Understanding the problem
What is temperature amplitude?
Difference between the highest and lowest temperature
How do we compute the min and max temperature?
What's a sensor error? And what to do?

2.Breaking up into sub-problems
How to ignore errors?
Find max value in temperature array
Find min value
Subtract min from max and (amplitude) return it

//Array of temperatures to evaluate:
const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
const calcTempAmplitude = function (temps) {
    //We will asume that the first element of the array is the maximum and minimum because we didn't loop over yet.
    let max = temps[0];
    let min = temps[0];
    //Here we set to loop through the array
    for (let i = 0; i < temps.length; i++) {
        //ignore errors
        if (typeof temps[i] !== "number") continue;
        //If the current (i) value of the array (temps) is greater than the current maximum/minimum value, the maximum/minimum value will become the maximum/minimum value.
        if (temps[i] > max) max = temps[i];
        if (temps[i] < min) min = temps[i];
    }
    console.log(`The Min temperature is ${min} and the max temperature is ${max}`);
    return max - min;
};

const amplitude = calcTempAmplitude(temperatures);
console.log(`The amplitude is equal to ${amplitude}`);
*/




/*PROBLEM 2: The function should receive 2 arrays of temperatures
Merge the 2 arrays into 1 so we implement the same functionality

//Merge 2 arrays:
const array1 = [50, 5, -30];
const array2 = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
//Array of temperatures to evaluate:
const temperatures = array1.concat(array2);

//Function that computes: max, min and amplitude
const calcTempAmplitude = function (temps) {
    //We will asume that the first element of the array is the maximum and minimum because we didn't loop over yet.
    let max = temps[0];
    let min = temps[0];
    //Here we set to loop through the array
    for (let i = 0; i < temps.length; i++) {
        //ignore errors
        if (typeof temps[i] !== "number") continue;
        //If the current (i) value of the array (temps) is greater than the current maximum/minimum value, the maximum/minimum value will become the maximum/minimum value.
        if (temps[i] > max) max = temps[i];
        if (temps[i] < min) min = temps[i];
    }
    console.log(`The Min temperature is ${min} and the max temperature is ${max}`);
    return max - min;
};

const amplitude = calcTempAmplitude(temperatures);
console.log(`The amplitude is equal to ${amplitude}`);
*/




/*DEBUGGING WITH THE CONSOLE AND BREAKPOINTS
//We need to convert from celcius to kelvin
const measureKelvin = function () {
    const measurement = {
        type: "temp",
        unit: "celsius",
        //Fix the bug
        value: Number(prompt("Degrees celsius:")),
    }
    //Find the bug: The inputted value on the prompt window is a string, the plus operator when detects a string, converts both operands to strings and concatenate them.
    const kelvin = measurement.value + 273;
    return kelvin;
}

//Identify the bug: Concats the input value of the prompt window with 273 instead of adding.
console.log(measureKelvin());
*/




/*USING DEBUGGER IN GOOGLE CHROME
Sources tab: developerSkills.js
Now set breakpoints clicking on the left bar, next to the number, will appear a read point (the breakpoint), and when we refresh the page the execution will freeze in time and show us exactly  what the execution looks like at that moment in time, and that includes all the values of all the defined variables. To go back to normal click on the top right "Resume script execution"*/