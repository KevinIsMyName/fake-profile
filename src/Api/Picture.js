import axios from "axios";

export default class Picture {
  static async getData() {
    return await axios.get("https://thispersondoesnotexist.com/image");
  }
}
