#!/usr/bin/env node
const http = require('http')
const readline = require('readline');
var appConfig = require('./config');

const myAPIKey = appConfig.apiKey;
const qweryCity = appConfig.qweryCity;



const getWeather = (url) => {
    const request = http.get(url, (response) => {
        const statusCode = response.statusCode

        if (statusCode !== 200) {
            console.error(`Status Code: ${statusCode}`)
            return
        }

        response.setEncoding('utf8')

        let rawData = ''
        response.on('data', (chunk) => rawData += chunk)
        response.on('end', () => {
            let parsedData = JSON.parse(rawData)
            //console.log(parsedData)
            console.log(`Температура в ${parsedData.location.name}/${parsedData.location.country} ${parsedData.current.temperature} градусов на ${parsedData.location.localtime}`)
        })
    })

    request.on('error', (e) => {
        console.error(`Got error: ${e.message}`)
    })
}




const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log(`Выбери город ${qweryCity.map((item,indx) => ` ${indx + 1} - ${item} `)} , 0 - выход`);

rl.on('line', (input) => {    
     
    if (!Number(input)) {
        console.log(`Спасибо за использование нашего сервиса погоды!`);
        rl.close();
    } else if (Number(input) <= qweryCity.length) {
        console.log(`Выбран город  ${qweryCity[--input]} `);
        const url = `${appConfig.apiServer}/current?access_key=${myAPIKey}&query=${qweryCity[input]}`;
        getWeather(url);           
    } 
    else {
        isNaN(input) && console.log(`введено НЕ число, допустимы только числа`);
        Number(input) > (qweryCity.length) && console.log(`введено Не корректное число, допустимы только числа от  0 до ${qweryCity.length}`);
    }    
});
  











