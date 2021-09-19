const config = {};

config.apiKey = process.env.weatherAPIKey || 'e6fd4b12ae9ea268294228ae5e7949df';
config.apiServer = process.env.weatherAPIserver || 'http://api.weatherstack.com';
config.qweryCity = [
    'London',
    'Moscow',
    'New York',
    'Berlin'
];
module.exports = config;



// weatherAPIKey = e6fd4b12ae9ea268294228ae5e7949df