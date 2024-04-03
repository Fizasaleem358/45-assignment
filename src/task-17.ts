#! /usr/bin/env node
// task-17


let dinnerGuestList: string[]= ["hurma", "saba", "iqra", "ayzal", "Fiza", "ansa"]; 
console.log(`table is not available i can invite only two persons\n`);

// remove all 4 last elements

let friend1 = dinnerGuestList.pop();
console.log(`sorry Miss ${friend1} you are not invited` );


let friend2 = dinnerGuestList.pop();
console.log(`sorry Miss ${friend2} you are not invited` );



let friend3 = dinnerGuestList.pop();
console.log(`sorry Miss ${friend3} you are not invited` );


let friend4 = dinnerGuestList.pop();
console.log(`sorry Miss ${friend4} you are not invited` );

for (let i = 0; i <dinnerGuestList.length; i++ ){
    console.log(`Miss. ${dinnerGuestList[i]} you are still invited`);
}

dinnerGuestList.pop();
dinnerGuestList.pop();

console.log(dinnerGuestList)