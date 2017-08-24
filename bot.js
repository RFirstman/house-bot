var curl = require("curlrequest");

var brands = {
    "bmw": ["3 series"],
    "chevy": ["tahoe"],
    "ford": ["explorer", "f150", "focus"],
    "honda": ["accord"],
    "lexus": ["es350"],
    "mazda": ["mazda 3", "miata"],
    "nissan": ["maxima", "rogue"],
    "toyota": ["4runner", "corolla", "camry"],
    "volvo": ["v50"]
}

var makes = {
    "3 series": "Chris Torie",
    "4runner": "Isaac Weeks",
    "accord": "Will Freeman",
    "camry": "Rob Firstman",
    "corolla": "Cameron Bennett",
    "explorer": "Peyton Bell",
    "es350": "Hamilton Wexler",
    "f150": "Joseph Perri",
    "focus": "Michael Stagnaro",
    "maxima": "Robert Berman",
    "miata": "Jack Walz",
    "mazda 3": ["Matt Fishman", "Everett Johnson"],
    "rogue": "Josh White",
    "tahoe": "Cameron Pepe",
    "v50": "Robert Edstrom"
}

module.exports = {
    respond: function (message) {
        var response = processMessage(message);

        var options = {
            method: 'POST',
            url: "https://api.groupme.com/v3/bots/post",
            data: { "text" : name, "bot_id" : "d50e3c892be84994c7635a8d7b" }
        }

        curl.request(options, function(error, response) {
            if (error) {
                console.log(error);
            }
        });
    }
}

// Checks if @whosecar tag is in message. If so, calls getOwner and returns
// proper response
function processMessage(message) {
    var tag = "@whosecar";
    if (req.body.text.indexOf(tag) != -1) {
        if (message.length - tag.length <= 1) {
            return "WHOSECAR: Include a car brand or make!"
        } else {
            return getOwner(message);
        }
    }
}

// Determines proper owner or owners of a car make/brand. If the relevant make
// or brand do not exist in the back lot, return a "BOOT" message.
function getOwner(message) {
    var string = message.toLowerCase().split(" ");
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

                if (owner instanceof Array) {
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

    if (typeof name != 'undefined') {
        return name;
    } else if (typeof brand != 'undefined') {
        var owners = "";

        brands[brand].forEach(function(make) {
            if (makes[make] instanceof Array) {
              makes[make].forEach(function(str){
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
