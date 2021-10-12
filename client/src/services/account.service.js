import api from "../axios/axios-instance";
//?HELPERS
import authHeader from "./headers/auth-header";

//?CONSTANT
import { ACCOUNTS } from "../constants/end-points";

class AccountDataService {
  getAccounts() {
    return api.get(ACCOUNTS + "/");
  }

  getLoggedInAccount() {
    return api.get(ACCOUNTS + "/logged-in", { headers: authHeader() });
  }
  //? "data" is the object that contains the data needed by the requests
  createAccount(data) {
    return api.post(ACCOUNTS + "/", data);
  }

  login(data) {
    return api.post(ACCOUNTS + "/login", data);
  }
}

export default new AccountDataService();
