// Express routes file
const bot = require("../bot/bot");
const path = require("path");
const fs = require("fs");
const multer = require("multer");
const mammoth = require("mammoth");
const mongoose = require("mongoose");
const autoReap = require("multer-autoreap");
const makeMenu = require("../services/makeMenu");
const config = require("../config/config");

const upload = multer({dest: "./"});

module.exports = app => {
	app.post("/", async (req, res) => {
		let groupBotMap = config.bot_ids;

		if (groupBotMap.hasOwnProperty(req.body.group_id)) {
			let bot_id = groupBotMap[req.body.group_id];

			if (req.body.text.includes("@bot")) {
				await bot.respond(req.body.text, bot_id);
			}
		}
	    res.sendStatus(200);
	});

	app.get("/menu", (req, res) => {
		res.sendFile(path.resolve(__dirname, "..", "views", 'menuUpload.html'));
	});

	app.post("/menu", upload.single("menu"), autoReap, async (req, res) => {
		if (!req.file || req.file.mimetype != "application/vnd.openxmlformats-officedocument.wordprocessingml.document") {
			res.end("Invalid file! Please upload a .docx file.");
		}

		await makeMenu(req.file);
		res.end("File uploaded successfully!");
	});

	app.get("/menu/current", async (req, res) => {
		const MenuModel = mongoose.model("menus");
		const { menu } = await MenuModel.findOne({}, {}, { sort: {dateUploaded: -1}});
		res.send(JSON.stringify(menu));
	});
}