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
        console.log("whosecar request: \'" + message + "\'");
        var name = getOwner(message);

        var options = {
            method: 'POST',
            url: "https://api.groupme.com/v3/bots/post",
            data: { "text" : name, "bot_id" : "4985f806e5462413b4cd75b06e" }
        }

        curl.request(options, function(error, response) {
            if (error) {
                console.log(error);
            }
        });
    }
}

function getOwner(message) {
    var string = message.split(" ");
    var name, brand, make;

    string.forEach(function(word) {
            if (makes.hasOwnProperty(word.toLowerCase())) {
                var car = makes[word.toLowerCase()];
                make = word;
                name = "";

                if (car instanceof Array) {
                  car.forEach(function(str) {
                    name += str + "\n";
                  });
                } else {
                  name = car;
                }
            }
            if (brands.hasOwnProperty(word.toLowerCase())) {
                brand = word;
            }
        });

    console.log(name + "--" + brand);

    if (typeof name != 'undefined') {
        return name;
    } else if (typeof brand != 'undefined') {
        var owners = "";
        brands[brand.toLowerCase()].forEach(function(make) {
            if (makes[make.toLowerCase()] instanceof Array) {
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
