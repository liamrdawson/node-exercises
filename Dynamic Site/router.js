const Profile = require("./profile.js");
const renderer = require("./renderer.js");
const commonHeader = {'Content-Type': 'text/html'};
const querystring = require('querystring');

// handle HTTP route GET / and POST / ie Home
function home(request, response) {
// if url == "/" && GET 
    if (request.url === "/") {
        if (request.method.toLowerCase() === "get") {
            //    show search
            response.writeHead(200, commonHeader);
            renderer.view('header', {}, response);
            renderer.view('search', {}, response);
            renderer.view('footer', {}, response);
            response.end();
        } else {
            // if url == "/" && POST 

            //Get the post data from body
            request.on('data', function(postBody) {
                console.log(postBody.toString());
                //Extract username
                let query = querystring.parse(postBody.toString());
                response.writeHead(303, {location: `/${query.username}`});
                response.end();
                //redirect to /:username 
            }) 
        }
    }
}

// handle HTTP route GET /:username ie /chalkers
function user(request, response) {
    // if url = "/...."
    var username = request.url.replace("/", "");
    if (username.length > 0) {
        response.writeHead(200, commonHeader)
        renderer.view('header', {}, response);
        //  get json from Trehouse
        var studentProfile = new Profile(username);

        //on "end"
        studentProfile.on("end", function(profileJSON) {
            //show profile 

            //store the values we need
            var values = {
                avatarUrl: profileJSON.gravatar_url,
                username: profileJSON.profile_name,
                badges: profileJSON.badges.length,
                javacriptPoints: profileJSON.points.JavaScript
            }

            //simple response
            renderer.view('profile', values, response);
            renderer.view('footer', {}, response);
            response.end();
        });

        //on "error" 
        studentProfile.on("error", function(error) {
            //show error
            renderer.view('error', {errorMessage: error.message}, response);
            renderer.view('search', {}, response);
            renderer.view('footer', {}, response);        
            response.end();
        });
    }
}


module.exports.home = home;
module.exports.user = user; 