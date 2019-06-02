//  Problem:    We need a simple way to look at a user's badge count and JavaScript points.
//  Solution:   Use Node.js to connect to Treehouse's API to retrieve profile information.


//  Require https module
const https = require('https');
const username = 'liamdawson';


//  Prints a message to the console.
function printMessage(username, badgeCount, points) {
    const message = `${username} has ${badgeCount} total badge(s) and ${points} points in JavaScript`;
    console.log(message);
}


//  Connect to the API URL (https://teamtreehouse.com/username.json)
const request = https.get(`https://teamtreehouse.com/${username}.json`, response => {
    let body = ` `;
//  Read the data
    response.on(`data`, (data) => {
        body += (`data: `, data.toString());
    });
    response.on(`end`, () => {
//  Parse the data
        const profile = JSON.parse(body);
//  Print the data
        printMessage(username, profile.badges.length, profile.points.JavaScript)
    });
} );
