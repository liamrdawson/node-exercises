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

function printMessage(weather, location) {
    const message = `It is currently ${weather} in ${location}`;
    console.log(message);
}

function getWeather() {
    const request = http.get(`http://api.openweathermap.org/data/2.5/weather?lat=53.114106&lon=-4.266810&APPID=88334d6be23fa78599a5e68fcc1d3b6e`, response => {
        let body = ` `;
        response.on(`data`, (data) => {
            body += (`data`, data.toString());
            console.log(body);
        });
        response.on(`end`, () => {
            const area = JSON.parse(body);
            printMessage(area.weather[0].main, area.name);
        });

    });
}

getWeather();