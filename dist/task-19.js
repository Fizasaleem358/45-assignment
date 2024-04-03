#! /usr/bin/env node
// task-19
let dinnerGuestList = ["hurma", "saba", "iqra", "ayzal", "ansa"];
console.log(`I am inviting ${dinnerGuestList.length}  friends to my dinner which are
 following\n`);
for (let i = 0; i < dinnerGuestList.length; i++) {
    console.log(`${i + 1}. ${dinnerGuestList[i]}`);
}
export {};
