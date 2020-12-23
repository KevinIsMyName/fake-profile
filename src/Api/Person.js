import axios from 'axios'

export default class Person {
    static async getData () {
        return await axios.get(
            "https://randomuser.me/api/"
        )
    }
} 