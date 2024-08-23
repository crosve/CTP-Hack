import axios from "axios";

const BACKEND_API = "http://127.0.0.1:5000/api/chat";

class chatService {
  sendMessage(message) {
    return axios.post(BACKEND_API, { message });
  }
}

export default new chatService();
