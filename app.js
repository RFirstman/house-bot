var express = require("express"),
    app = express(),
    curl = require("curlrequest"),
    bodyParser = require("body-parser"),
    bot = require("./bot.js");
const InsultCompliment = require("insult-compliment");

app.use(bodyParser.json());

app.post("/", function(req, res) {
    if (req.body.name != "c9 test" && req.body.text.indexOf("@whosecar") != -1) {
        bot.respond(req.body.text);
    }
});

port = process.env.PORT || 3000;

app.listen(port, function() {
    console.log("Server running!");
});
