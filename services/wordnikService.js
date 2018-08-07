const axios = require("axios");

const config = require("../config/config");

module.exports = getWordOfTheDay;

async function getWordOfTheDay() {
    let result = "";

    let date = new Date();
    let dateString = `${date.getUTCFullYear()}-${date.getUTCMonth()+1}-${date.getUTCDate()}`
    let requestUrl = `https://api.wordnik.com/v4/words.json/wordOfTheDay?date=${dateString}&api_key=${config.wordnik_api_key}`
    
    let response = await axios.get(requestUrl, { headers: { "Accept": "application/json" } });

    let { data } = response;
    if (data) {
        let { word, note } = data;
        let { text, partOfSpeech } = data.definitions[0];
        let example = data.examples[0].text;
        
        result = `
        ${word.toUpperCase()}, ${partOfSpeech}
        ${text}
        Ex: ${example}
        Note: ${note}`
    }
    return result;
}