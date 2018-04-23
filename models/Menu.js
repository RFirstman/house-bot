const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const menuSchema = new Schema({
	dateUploaded: {
		type: Date,
		default: Date.now
	},
	menu: Object
});

mongoose.model("menus", menuSchema);