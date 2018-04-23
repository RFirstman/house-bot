var curl = require("curlrequest");

const processMessage = require("./processMessage");

module.exports = {
    respond: async (message, bot_id) => {
        const response = await processMessage(message.toLowerCase());

        var options = {
            method: "POST",
            url: "https://api.groupme.com/v3/bots/post",
            data: { text: response, bot_id }
        };

        curl.request(options, function(error, response) {
            if (error) {
                console.log(error);
            }
        });
    }
};

