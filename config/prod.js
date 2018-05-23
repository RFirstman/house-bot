let bot_ids = JSON.parse(process.env.BOT_IDS);
module.exports = {
	bot_ids,
	mongo_uri: process.env.MONGODB_URI
}