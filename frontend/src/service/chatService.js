import axios from "axios";

const BACKEND_API = "http://127.0.0.1:5000/api/api/chat";
const QUESIONARE_API = "http://127.0.0.1:5000/api/api/questionare";

class chatService {
  sendMessage(message) {
    return axios.post(BACKEND_API, { message: message });
  }

  getQuestionare(questionData) {
    return axios.post(QUESIONARE_API, { questionData: questionData });
  }
}

export default new chatService();
