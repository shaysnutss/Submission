import axios from "axios";
const API_URL = "http://localhost:30009/api/v1/auth/";

const API_URL1= "http://localhost:30009/api/v1/account";

class authService {
    login(email, password) {
        return axios
            .post(API_URL + "authenticate", {
                email,
                password
            })
            .then((response) => {
                if (response.data.accessToken) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                    console.log(response.data);
                }
                return response.data;
            });
    }

    getAllAccounts = () => {
        return axios.get(API_URL1 + "/getAllAccounts");
    };


    logout = () => {
        localStorage.removeItem("user");
    };

    getCurrentUser = () => {
        return JSON.parse(localStorage.getItem("user"));
    };
}

export default new authService;