'use strict';
//Problem
//We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error"

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
/*1.Understanding the problem
What is temperature amplitude?
Difference between the highest and lowest temperature
How do we compute the min and max temperature?
What's a sensor error? And what to do?

*/
//2.Breaking up into sub-problems