#! /usr/bin/env node

import inquirer from "inquirer";

const Answer:{sentence:string} = await inquirer.prompt(
    [
    {
    name:'sentence',
    type:'input',
    message:'Enter your paragraph to count the words'

}
]
)
// .trim() using for delete white spaces
// .split() using for converting data paragraph/string to array like("i", "am", "going", "to", "home").
// .split(" ") to space in between (" ") to segregate each words if are removed space("") that each alphabet are segregate
const words = Answer.sentence.trim().split(" ")
console.log(words);
// .length measure length of array
console.log(`your paragraph to count ${words.length} words`);
