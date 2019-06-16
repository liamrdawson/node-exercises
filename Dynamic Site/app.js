
//PROBLEM:  We need a simple way to look at a users badge count and JavaScript points from a web browser. 
//SOLUTION: Use NodeJS to perform the profile lookups and serve our template  via HTTP.

var router = require("./router.js")
// problem : we need a simple way to look at user's badge count and JavaScript point from a web browser
// solution : use node.js to perfom the profile look ups and server our template via HTTP

// create a web server 
var http = require('http')
http.createServer(function (request, response) {
    router.home(request, response)
    router.user(request, response)
}).listen(3000)
console.log('server running at http://127.0.0.1:3000/')
