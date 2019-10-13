import { REQUEST_BASE_URL } from "@config";
import axiosBase from "axios";

export default axiosBase.create({
    baseURL: REQUEST_BASE_URL,
    headers: {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest"
    },
    responseType: "json"
});