const OpenAI = require('openai');

class Openai {
    static configuration () {
        const openai = new OpenAI({
            apiKey: process.env.OPENAI_API_KEY
        })

        return openai
    }

    static textCompletion ({ prompt }) {
        const objectModel = {
            model: "gpt-3.5-turbo", // "gpt-3.5-turbo-16k-0613"
            messages: [{ role: "user", content: `${prompt}`}],
        }

        return objectModel
    }
}

module.exports = Openai