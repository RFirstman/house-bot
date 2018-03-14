var curl = require("curlrequest");

const { brands, makes } = require("../data/cars");
const generateGreeting = require("./generateGreeting");

module.exports = {
    respond: function(message) {
        var response = processMessage(message.toLowerCase());

        var options = {
            method: "POST",
            url: "https://api.groupme.com/v3/bots/post",
            data: { text: response, bot_id: "4985f806e5462413b4cd75b06e" }
            // data: { text: response, bot_id: "469361e7f4e353c11f4e4ce7c9" } for test groupme
        };

        curl.request(options, function(error, response) {
            if (error) {
                console.log(error);
            }
        });
    }
};

// Checks if @whosecar tag is in message. If so, calls getOwner and returns
// proper response
function processMessage(message) {
    if (message.includes("@whosecar")) {
        var response = generateGreeting() + "\nWhose Car:\n";
        if (message.match(/walz/i)) {
            return "BEEP BOOP FUCK WALZ";
        }
        if (message.match(/josh/i)) {
            return "Josh is a turd wrangler";
        }
        if (message.match(/everett/i)) {
            return "TRIGGERED";
        }
        if (message.match("/clint/i")) {
            return "Oh no!! Clint's blocking the back lot again? Whatever can we do?";
        }
        if (message.length - 9 <= 1) {
            return response + "Include a car brand or make!";
        } else {
            return response + getOwner(message);
        }
    }
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
