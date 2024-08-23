import axios from "axios";

const BACKEND_API = "http://localhost:5000/chat";

class chatService {
  sendMesage(message) {
    return axios.post(BACKEND_API, { message });
  }
}

export default chatService;
