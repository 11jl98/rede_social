import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const http = axios.create({
  baseURL: "http://10.0.0.104:3001",
});

http.interceptors.request.use(async function(config) {
  try {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `${token}`;
    }
    return config;
  } catch (error) {
    alert(error);
  }
});
