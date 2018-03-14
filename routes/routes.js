// Express routes file
const bot = require("../bot/bot");
module.exports = app => {
	app.post("/", function(req, res) {
	    if (req.body.text.includes("@whosecar")) {
	        bot.respond(req.body.text);
	    }
	    res.sendStatus(200);
	});
}