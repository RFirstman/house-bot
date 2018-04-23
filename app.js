var express = require("express"),
    app = express(),
    curl = require("curlrequest"),
    mongoose = require("mongoose"),
    bodyParser = require("body-parser"),
    config = require("./config/config"),
    bot = require("./bot/bot");

require("./models/Menu");

mongoose.connect(config.mongo_uri);

app.use(bodyParser.json());

require("./routes/routes")(app);

port = process.env.PORT || 3000;

app.listen(port, function() {
    console.log("Server running on port " + port);
});
