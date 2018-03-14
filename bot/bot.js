var curl = require("curlrequest");

const processMessage = require("./processMessage");

module.exports = {
    respond: function(message) {
        var response = processMessage(message.toLowerCase());

        var options = {
            method: "POST",
            url: "https://api.groupme.com/v3/bots/post",
            data: { text: response, bot_id: "4985f806e5462413b4cd75b06e" }
            //data: { text: response, bot_id: "469361e7f4e353c11f4e4ce7c9" } //for test groupme
        };

        curl.request(options, function(error, response) {
            if (error) {
                console.log(error);
            }
        });
    }
};

