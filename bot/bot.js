var curl = require("curlrequest");

const processMessage = require("./processMessage");
const { bot_id } = require("../config/config");

module.exports = {
    respond: function(message) {
        var response = processMessage(message.toLowerCase());

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

