const greetings = [
	"[insert house bot greeting here]",
	"House Bot",
	"HOUSE BOT",
	"It's your favorite groupme bot: House Bot!",
	"*sweats* h-hi it's h-house bot uWu",
	"beep boop. it is I. HOUSE BOT."
];

module.exports = () => {
	return greetings[Math.floor(Math.random() * greetings.length)];
}