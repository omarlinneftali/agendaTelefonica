import axios from "axios";
import { toast } from "react-toastify";

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error?.response?.status >= 400 && error?.response?.status < 500;
  if (!expectedError) {
    toast.error("Error de conexión con el servidor", {
      toastId: "ErrorServer",
    });
  }
  return Promise.reject(error);
});

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

export default {
  get: axios.get,
  put: axios.put,
  delete: axios.delete,
  post: axios.post,
};
