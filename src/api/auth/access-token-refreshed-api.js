import axiosInstance from "../axios";

export const AccessTokenRefreshedApi = (refresh) =>
    axiosInstance.post("/account/token/refresh/", {
        refresh
    });