// Express routes file
const bot = require("../bot/bot");
const path = require("path");
const fs = require("fs");
const multer = require("multer");

const storage = multer.diskStorage({
	destination: (req, file, callback) => {
		callback(null, "./");
	},
	filename: (req, file, callback) => {
		callback(null, "input.docx");
	}
});

const upload = multer({ storage }).single("menu");

module.exports = app => {
	app.post("/", async (req, res) => {
	    if (req.body.text.includes("@bot")) {
	        await bot.respond(req.body.text);
	    }
	    res.sendStatus(200);
	});

	app.get("/menu", (req, res) => {
		res.sendFile(path.resolve(__dirname, "..", "views", 'menuUpload.html'));
	});

	app.post("/menu", (req, res) => {
		upload(req, res, err => {
			if (err) {
				res.end("Error uploading file.");
			}
			require("../services/makeMenu");
			res.end("File uploaded successfully!");
		});
	});
}