//PROBLEM:  We need a simple way to look at a users badge count and JavaScript points from a web browser. 
//SOLUTION: Use NodeJS to perform the profile lookups and serve our template  via HTTP.

//1. Create a web server.

//2. Handle the HTTP route GET / and POST / i.e. Home
    //if url === "/" && GET 
        //show search
    //if url === "/" && POST
        //redirect to /:username

//3. Handle HTTP route for GET /:username i.e. .liamdawson
    //if url === "/...."
        //get json from Treehouse
            //on "end"
                //show profile
            //on error
                //show error message 

//4. Function that handles the reading of files and merge in values.
    //read from file and get a string
        //merge values into string