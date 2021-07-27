#!/usr/bin/env node
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('Загадано число в диапазоне от 0 до 100');


const numberTrials = 3;
let currTrial = 0
const num = Math.floor(Math.random() * 101);
 
rl.on('line', (input) => {
     
    if (Number(input) === num) {
        console.log(`Отгадано число  ${input} `);
        rl.close();
    } else if (  num > Number(input)) {
        currTrial++;
        console.log(`Больше`);
    } else if (  num < Number(input)) {
        currTrial++;
        console.log(`Меньше`);
    }
    (currTrial >= numberTrials) && rl.close();
});
  
//console.log(`Загадано число  ${num} `); 










