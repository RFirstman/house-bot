var emoji = require("node-emoji");

module.exports = (message) => {
    response = "";
    if (message.match(/bot/i) && message.match(/bot/g).length > 1) {
        response += "\nbeep boop I'm a low effort meme dump";
    }
    if (message.match(/walz/i)) {
        response += "\nBEEP BOOP FUCK WALZ";
    }
    if (message.match(/josh/i)) {
        response += "\nJosh is a turd wrangler";
    }
    if (message.match(/everett/i)) {
        response += "\nTRIGGERED";
    }
    if (message.match(/clint/i)) {
        response += "\nOh no!! Clint's blocking the back lot again? Whatever can we do?";
    }
    if (message.match(/perri/i)) {
        response += "\nEyyy, I'm walkin' here!";
    }
    if (message.match(/berm|berman/i)){
        response += "\nLet's go!";
    } 
    if (message.match(/rob/i) || message.match(/firstman/i)) {
        response += "\nRob Firstman? More like Rob WORSTman";
    }
    if (message.match(/Hannah|Emma|Lauren|Abigail|Natalie|Kaleigh|Savannah|Kitty|Helen/i)) {
        response += "\n*whip cracks*";
    }
    if (message.match(/pepe/i)) {
        response += "\nwhatdoyoumeanitalktoofast?"
    }
    if (message.match(/isaac|sac/i)) {
        response += "\nIsaac Weeks: if you need/have weed; he's there."
    }
    if (message.match(/zac/i)) {
        response += "\nCook Out?";
    }
    if (message.match(/peyton/i)) {
        response += "\nWatch out for the Ankle Breaker!";
    }
    if (message.match(/burke/i)) {
        response += "\nHOUSE BOT LIKE BURKE. BURKE IS FELLOW ROBOT.";
    }
    if (message.match(/erek/i)) {
        response += "I would think Erek is a serial killer if he didn't have polio.";
    }
    if (message.match(/andrew/i)) {
        response += "\nTHICC " + emoji.get("triumph") + emoji.get("sweat_drops") + emoji.get("weary");
    }
    if (message.match(/Elon|Musk/i)) {
        response += "\n*bishop quivers excitedly*"
    }
    if (message.match(/kian/i)) {
        response += "\nKian: half goat, half human garbage, all about the scraps.";
    }

    return response;
}