#! /usr/bin/env node
// task-18
let myPlaces = ["Saudi Arabia", "GilgitBaltistan", "hunza", "kashmir", "swat"];
console.log(myPlaces);
// making a copt of an array 
let copyOfArray = myPlaces.slice();
let sortedArray = copyOfArray.sort();
console.log(sortedArray);
// printing original 
console.log(myPlaces);
// reversing original array 
// first we have to make a copy of original array 
let copyOfArray2 = myPlaces.slice();
let reverseOriArray = copyOfArray.reverse();
console.log(reverseOriArray);
// printing original array 
console.log(myPlaces);
// reverse the order of original  array 
let reverseOriArray2 = myPlaces.reverse();
console.log(reverseOriArray2);
let againReverse = reverseOriArray2.reverse();
console.log(againReverse);
//sorting arrays in original
let sortOriArray = myPlaces.sort();
console.log(sortOriArray);
let reverseSortArray = sortOriArray.reverse();
console.log(reverseSortArray);
export {};
