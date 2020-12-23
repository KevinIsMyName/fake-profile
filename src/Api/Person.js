import axios from 'axios'

export default class Person {
    static async getData () {
        return await axios.get(
            "https://pipl.ir/v1/getPerson",
            {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Headers': 'Content-Type',

                }
            }
        )
    }
} 