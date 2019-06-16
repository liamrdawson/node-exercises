const fs = require("fs");

function mergeValues(values, content) {
    //Cycle over the keys.
    for (let key in values) {
        //Replace all {{key}} with values from the values object.
        content = content.replace(`{{${key}}}`, values[key]);
    }
    //Return the merged content. 
    return content;
}

function view(templateName, values, response) {
    //Read from the template file.
    let fileContents = fs.readFileSync(`./views/${templateName}.html`, {encoding: "utf8"});
    //Insert values in to the content.
    fileContents = mergeValues(values, fileContents);
    //Write out to the response.
    response.write(fileContents);
}

module.exports.view = view;