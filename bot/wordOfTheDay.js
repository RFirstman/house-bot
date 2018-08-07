const getWordOfTheDay = require("../services/wordnikService");

module.exports = async () => {
    return new Promise(async (resolve, reject) => {
        setTimeout(() => {
            reject("Word of the day fetch timed out!");
        }, 10000);

        let response = await getWordOfTheDay();
        resolve(response);
    })
}