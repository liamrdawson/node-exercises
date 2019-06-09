//  Problem:    We need a simple way to look at a user's badge count and JavaScript points.
//  Solution:   Use Node.js to connect to Treehouse's API to retrieve profile information.
const profile = require('./profile.js');


const users = process.argv.slice(2);
users.forEach(profile.get);

console.log(process.argv);