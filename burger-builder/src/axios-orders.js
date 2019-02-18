import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-builder-project-a49fe.firebaseio.com"
});

export default instance;
