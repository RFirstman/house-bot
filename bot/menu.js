module.exports = () => {
	try {
		const menu = require("../data/menu.json");
		let response = "\n";
		for (var key in menu) {
			let { lunch, dinner } = menu[key]
			response += key + ":\n" + lunch + "\n" + dinner + "\n";
		}
		return response;
	} catch (err) {
		console.log(err);
		return "Couldn't get the menu :(";
	}
}