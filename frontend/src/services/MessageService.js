import axios from 'axios'

const MESSAGE_GET_ALL_URL = "http://localhost:8080/message/all";
const SAVE_MESSAGE_URL = "http://localhost:8080/message/add";

class MessageService {

  getAllMessages() {
    return axios.get(MESSAGE_GET_ALL_URL);
  }

  saveMessage(message) {
    return axios.post(SAVE_MESSAGE_URL, message);
  }

}

export default new MessageService();