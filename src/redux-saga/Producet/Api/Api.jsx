import axios from "axios";
import { BASE_URL, GET_COURES_URL } from "../../constant";

export const getCoures = () => {
  return axios
    .get(BASE_URL + GET_COURES_URL)
    .then((res) => {
      const data = res.data;
      const status = res.status;
      return {
        data,
        status,
      };
    })
    .catch((err) => console.log(err));
};
