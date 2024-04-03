#! /usr/bin/env node
// task-16

let dinnerGuestList: string[]= ["hurma", "saba", "iqra", "ayzal"]; 
console.log(dinnerGuestList)

console.log( `we have 3 more friends to invite on dinner`)


// adding three more friends
//ading at begginnng

dinnerGuestList.unshift("fiza");
// ["fiza","hurma", "saba", "iqra", "ayzal"]
console.log(dinnerGuestList)

//add at middle 
dinnerGuestList.splice(2, 0, "arisha" )
console.log(dinnerGuestList)

//at at last

dinnerGuestList.push("eshal")
console.log(dinnerGuestList)

//print all
for (let i = 0; i <dinnerGuestList.length; i++){
    console.log(`Mrs ${dinnerGuestList[i]} you are invited to our dinner`);
}
