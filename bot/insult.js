var getInsult = require("insults").default;

module.exports = args => {
	let insultArgs = args.slice(args.indexOf("insult") + 1);
	let target = "";
	if (insultArgs.length > 0) {
		target = "To " + insultArgs.join(" ") + ": ";
	}

	return "\n" + target + getInsult();
}