import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:30009/api/v1/demo-controller";

class userService {
  getAccountById = () => {
    return axios.get(API_URL + "/demo", { headers: authHeader() });
  };

  getName = () => {
    return axios.get(API_URL + "/viewName", { headers: authHeader() });
  }

  getAccount = () => {
    return axios.get(API_URL + "/getAccount", { headers: authHeader() });
  }

}

export default new userService;