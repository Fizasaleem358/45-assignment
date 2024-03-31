#!/usr/bin/env node
// task--15

// Guest List:

// Define the list of people to invite to dinner
let dinnerGuestList: string[] = ["hurma", "saba", "iqra"];

// Print an invitation message to each person
// dinnerGuestList.forEach(guest => {
//     console.log(`Dear ${guest}, you are cordially invited to dinner. Please join us for a delightful evening.`);
// });

// Changing Guest List:

// Remove a guest who can't make it to dinner
let cancelledGuest: string = "hurma";
let index: number = dinnerGuestList.indexOf(cancelledGuest);
if (index !== -1) {
    dinnerGuestList.splice(index, 1);
}

// Add a new guest to the list
let newGuest: string = "ayzal";
dinnerGuestList.push(newGuest);

// Print updated invitation messages to each person
dinnerGuestList.forEach(guest => {
    console.log(`Dear ${guest}, you are cordially invited to dinner. Please join us for a delightful evening.`);
});






