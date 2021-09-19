#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, 'log.txt');



const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('Отгадай число ( 1 или 2 ) , 0 - выход');

let successTrials = 0;
let failTrials  = 0;
const num = Math.ceil(Math.random() * 2);
let content = null;
 
rl.on('line', (input) => {

    
     
    if (!Number(input)) {
        console.log(`Спасибо за игру! Вы играли  ${successTrials + failTrials} раз `);
        rl.close();
    } else if (  num === Number(input)) {
        successTrials++;
        console.log(`Угадано  ${successTrials} раз`);
        content = ' 1';
    } else if (  num !== Number(input) && Number(input) < 3) {
        failTrials++;
        console.log(`Не угадано  ${failTrials} раз`);
        content = ' 0';
    }
    else {
        isNaN(input) && console.log(`введено НЕ число, допустимы только числа`);
        Number(input) >2 && console.log(`введено Не корректное число, допустимы только числа 1 или 2`);
    }
    
    content && fs.appendFile(
        file,
        content,
        err => {
         if (err) throw new Error(err)
            console.log('log Ok');
            content = null;
        }
        );
});
  
console.log(`Загадано число  ${num} `); 










