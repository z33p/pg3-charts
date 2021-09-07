import axios from "axios";

export const httpInstance = () => {
  const axiosInstance = axios.create({
    baseURL: "https://pg3-school-app.herokuapp.com/",
  });

  return axiosInstance;
};
