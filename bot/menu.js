const mongoose = require("mongoose");
const days = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday"
];

module.exports = async args => {
	const MenuModel = mongoose.model("menus");
	const { menu } = await MenuModel.findOne({}, {}, { sort: {dateUploaded: -1}});
	if (args.includes("today")) {
		let n = new Date().getDay();
		if (n == 0 || n == 6) {
			return "\nNo food on the weekend!";
		}
		const today = days[n];
		let { lunch, dinner } = menu[today];

		return "\nToday's Menu:\n" + lunch + "\n" + dinner + "\n";
	} else if (args.includes("tomorrow")) {
		let n = (new Date().getDay() + 1) % 7;
		if (n == 0 || n == 6) {
			return "\nNo food on the weekend!";
		}
		const tomorrow = days[n];
		let { lunch, dinner } = menu[tomorrow];

		return "\n" + tomorrow + "'s Menu:\n" + lunch + "\n" + dinner + "\n";
	}

	let response = "\n";
	for (var key in menu) {
		let { lunch, dinner } = menu[key];
		response += key + ":\n" + lunch + "\n" + dinner + "\n";
	}
	return response;
};
