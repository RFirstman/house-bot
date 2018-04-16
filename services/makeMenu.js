var mammoth = require("mammoth");
var path = require("path");
var fs = require("fs");

const daysRegex = /Monday|Tuesday|Wednesday|Thursday|Friday/i;

module.exports = async () => {
	let buffer = fs.readFileSync(
		path.resolve(__dirname, "..", "input.docx"),
		"binary"
	);

	const text = (await mammoth.extractRawText({ buffer })).value;
	const lines = text.split("\n");

	// console.log(lines);
	let menu = {};
	let i = 0;
	while (i < lines.length) {
		let line = lines[i];
		if (daysRegex.test(line)) {
			let day = line.match(daysRegex);
			menu[day] = {};

			do {
				i++;
			} while (lines[i].length == 0);

			let lunchText = "",
				dinnerText = "",
				count = 0;
			while (i < lines.length && count < 2) {
				if (lines[i].length < 1) {
					count++;
				} else {
					lunchText += lines[i] + "\n";
					count = 0;
				}
				i++;
			}
			menu[day].lunch = lunchText;

			count = 0;
			while (i < lines.length && count < 2) {
				if (lines[i].length < 1) {
					count++;
				} else {
					dinnerText += lines[i] + "\n";
					count = 0;
				}
				i++;
			}
			menu[day].dinner = dinnerText;
		}
		i++;
	}

	fs.writeFileSync(
		path.resolve(__dirname, "..", "data", "menu.json"),
		JSON.stringify(menu, null, 4)
	);
};
