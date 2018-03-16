const menu = require("../data/menu.json");
const days = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];

module.exports = (args) => {
	if (args.includes("today")) {
		let n = new Date().getDay();
		if (n == 0 || n == 6) {
			return "No food on the weekend!";
		}
		const today = days[n];
		let { lunch, dinner } = menu[today];

		return "\nToday's Menu:\n" + lunch + "\n" + dinner + "\n"; 
	}

	let response = "\n";
	for (var key in menu) {
		let { lunch, dinner } = menu[key]
		response += key + ":\n" + lunch + "\n" + dinner + "\n";
	}
	return response;
}