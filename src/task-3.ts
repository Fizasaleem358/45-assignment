#! /usr/bin/env node
//task 3 Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

 
let personName: string = "John Doe";

// Print the name in lowercase
console.log("Lowercase:", personName.toLowerCase());

// Print the name in uppercase
console.log("Uppercase:", personName.toUpperCase());

// Function to convert the name to titlecase
function toTitleCase(str: string): string {
    return str.replace(/\b\w/g, function(char) {
        return char.toUpperCase();
    });
}

// Print the name in titlecase
console.log("Titlecase:", toTitleCase(personName));
