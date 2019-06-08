/*  THE APP SHOULD BE ABLE TO:  accept either a post code or city & country as a value
                                return the current temperature for that area
*/

//  DECIDE ON WEATHER API TO USE.

/**
 *              Endpoint: api.openweathermap.org
 *               API Key: api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=88334d6be23fa78599a5e68fcc1d3b6e
 *         Documentation: https://openweathermap.org/api 
*/

const http = require('http');
const https = require('https');

function printMessage(weather, location, temp) {
    const celsius = Math.round(temp - 273.5);
    const message = `There's currently ${weather} in ${location}, with a temperature of about ${celsius} degrees.`;
    console.log(message);
}

function getLongLat(postcode) {
    const requestLongLat = https.get(`https://api.postcodes.io/postcodes/${postcode}`, response => {
        let body = ` `;
        response.on(`data`, data => {
            body += (`data: `, data.toString());
        });
        response.on(`end`, () => {
            const location = JSON.parse(body); 
            getWeather(location.result.latitude, location.result.longitude);
        });
    });
}


function getWeather(latitude, longitude) {
    const request = http.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=88334d6be23fa78599a5e68fcc1d3b6e`, response => {
        let body = ` `;
        response.on(`data`, (data) => {
            body += (`data`, data.toString());
        });
        response.on(`end`, () => {
            const area = JSON.parse(body);
            printMessage(area.weather[0].description, area.name, area.main.temp);
        });
    });
}

const postcodes = process.argv.slice(2);
postcodes.forEach(getLongLat);