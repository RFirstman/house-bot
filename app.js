var express = require("express"),
    app = express(),
    curl = require("curlrequest"),
    bodyParser = require("body-parser"),
    bot = require("./bot/bot");

require("./routes/routes")(app);

app.use(bodyParser.json());

port = process.env.PORT || 3000;

app.listen(port, function() {
    console.log("Server running!");
});
