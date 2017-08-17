var express = require("express"),
    app = express(),
    curl = require("curlrequest"),
    bodyParser = require("body-parser"),
    bot = require("./bot.js");

app.use(bodyParser.json());

app.post("/post", function(req, res) {
    if (req.body.name != "c9 test" && req.body.text.indexOf("@whosecar") != -1) {
        bot.respond(req.body.text);
    }

});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server running!");
});
