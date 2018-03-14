var express = require("express"),
    app = express(),
    curl = require("curlrequest"),
    bodyParser = require("body-parser"),
    bot = require("./bot/bot");

app.use(bodyParser.json());

require("./routes/routes")(app);

port = process.env.PORT || 3000;

app.listen(port, function() {
    console.log("Server running!");
});
