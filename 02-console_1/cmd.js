#!/usr/bin/env node
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const moment = require('moment')

const argv = yargs(hideBin(process.argv)).argv;

if (argv._.find(item => item === 'current')) {
    const date = moment();
    if (argv.year || argv.y) {
        console.log(date.format('YYYY'));
    } else if ((argv.month || argv.m)) { 
        console.log(date.format('MMMM / MM'));
    }else if ((argv.date || argv.d)) { 
        console.log(date.format('DD'));
    }
    else {
        console.log(date.format());
    }   
}

if (argv._.find(item => item === 'add')) {
    let date = moment();
    if (argv.year || argv.y) {
        const year = argv.year || argv.y;        
        console.log(date.add( year, 'year').format());
    } else if ((argv.month || argv.m)) { 
        const month = argv.month || argv.m;        
        console.log(date.add( month, 'month').format());
    }else if ((argv.date || argv.d)) { 
        const d = argv.date || argv.d;        
        console.log(date.add( d , 'days').format());
    }
    else {
        console.log(date.format());
    }
       
}

if (argv._.find(item => item === 'sub')) {
    let date = moment();
    if (argv.year || argv.y) {
        const year = argv.year || argv.y;        
        console.log(date.subtract( year, 'year').format());
    } else if ((argv.month || argv.m)) { 
        const month = argv.month || argv.m;        
        console.log(date.subtract( month, 'month').format());
    }else if ((argv.date || argv.d)) { 
        const d = argv.date || argv.d;        
        console.log(date.subtract( d , 'days').format());
    }
    else {
        console.log(date.format());
    }
       
}










// if (argv.ships > 3 && argv.distance < 53.5) {
//   console.log('Plunder more riffiwobbles!')
// } else {
//   console.log('Retreat from the xupptumblers!')
// } 'dddd, MMMM DD YYYY'