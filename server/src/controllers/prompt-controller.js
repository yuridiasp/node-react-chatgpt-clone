const openai = require("../config/openai")
const InputPrompt = require("../models/input-prompt")

module.exports = {
    async sendText(req, res) {
        
        const openaiAPI = openai.configuration()
        const inputPrompt = new InputPrompt(req.body)
        
        try {
            const response = await openaiAPI.chat.completions.create(openai.textCompletion(inputPrompt))

            return res.status(200).json({
                success: true,
                data: response.choices[0]
            })
        } catch (error) {
            return res.status(400).json({
                success: false,
                error: error.error.message ? error.error.message : "There was as inssue on the server"
            })
        }
    }
}