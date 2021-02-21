//Bring in Axios
import axios from "axios";

export default {
  //Get random users from the API
  getUsers: function () {
    return axios.get("https://randomuser.me/api/?results=200&nat=us");
  },
};
