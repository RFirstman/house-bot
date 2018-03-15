// Express routes file
const bot = require("../bot/bot");
module.exports = app => {
	app.post("/", async (req, res) => {
	    if (req.body.text.includes("@bot")) {
	        await bot.respond(req.body.text);
	    }
	    res.sendStatus(200);
	});
}