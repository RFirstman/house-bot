# whose-car-bot

A GroupMe bot built to help and entertain my friends at our house.

The bot, made with Node.js, utilizes the Express framework to receive 
incoming messages from particular group messages. In addition, the bot 
utilizes MongoDB for storing the weekly menu.

Currently, the bot is able to list the daily/weekly menu, report the 
current weather, match an owner to a car (for when someone is blocked 
in), generate random insults (all in good fun), and respond with other
keyword-based easter eggs.

## Command Format

To get the bot to respond to you at all, send a message in the GroupMe 
with the bot of the format "@bot {commands} {go} {here}"

For example, "@bot weather" would have the bot respond with the current 
weather

## How to Run

First, clone this repository and install the relevant modules.

`git clone https://github.com/RFirstman/house-bot
 cd house-bot
 npm i` 

Once you have your GroupMe bot created ([see the GroupMe developer page]
(https://dev.groupme.com/)), set the callback URL to 
`http://localhost:3000/`.

 Next, you will want to create a config file. Fill out this template 
 with your bot's ID and Group ID:

 ```module.exports = {
	bot_ids: {
		"your group id here": "your bot id here"
	}
}
 ```

Save this file as `config/dev.js`

Finally, start the server with `npm start` or `node app.js`