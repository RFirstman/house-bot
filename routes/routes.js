// Express routes file

module.exports = app => {
	app.post("/", function(req, res) {
	    if (req.body.name != "c9 test" && req.body.text.includes("@whosecar")) {
	        bot.respond(req.body.text);
	    }
	});
}