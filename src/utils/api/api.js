import axios from "axios";
import { URL_BASE } from "../../services/constants";

export const getApi = axios.create({
  baseURL: "http:192.168.0.4:8000/",
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});
export const getApiAuth = axios.create({
  baseURL: URL_BASE,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});
