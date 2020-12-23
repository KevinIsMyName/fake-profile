import axios from 'axios'

export default class KanyeApi {
    static async getQuote () {
        return await axios.get("https://api.kanye.rest?format=text")
    }
} 