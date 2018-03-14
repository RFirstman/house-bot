const generateGreeting = require("./generateGreeting");
const { brands, makes } = require("../data/cars");
const checkForName = require("./checkForName");

module.exports = (message) => {
    var response = generateGreeting();
    if (message.includes("whosecar")) {
        response += "\nWhose Car:\n";
        let args = message.substr(message.indexOf("whosecar") + "whosecar".length);


        if (args.length == 0) {
            response += "Include a car brand or make!";
        } else {
            response += getOwner(message);
        }
    }
    response += checkForName(message);
    return response;
}


// Determines proper owner or owners of a car make/brand. If the relevant make
// or brand do not exist in the back lot, return a "BOOT" message.
function getOwner(message) {
    var string = message.split(" ");
    var name, brand, make;

    // Parses through string and sets relevant variables
    string.forEach(function(word) {
        // If the word matches a make of car that exists in the back lot,
        // Set the relevant variable. If there are multiple owners of the
        // same make of car, make a list of owners
        if (makes.hasOwnProperty(word)) {
            var owner = makes[word];
            make = word;
            name = "";

            if (owner.length > 1) {
                owner.forEach(function(str) {
                    name += str + "\n";
                });
            } else {
                name = owner;
            }
        }

        // If the word matches a brand of car that exists in the back lot,
        // set the relevant variable to it
        if (brands.hasOwnProperty(word)) {
            brand = word;
        }
    });

    if (typeof name != "undefined") {
        return "Owner of a " + make + ": " + name;
    } else if (typeof brand != "undefined") {
        var owners = "";

        brands[brand].forEach(function(make) {
            if (makes[make] instanceof Array) {
                makes[make].forEach(function(str) {
                    owners += str + "\n";
                });
            } else {
                owners += makes[make] + "\n";
            }
        });
        return "Owners of a " + brand + ":\n" + owners;
    } else {
        return "No one with that car! BOOT";
    }
}