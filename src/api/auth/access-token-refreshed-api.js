import axiosInstance from "../axios";

export const AccessTokenRefreshedApi = (refresh) =>
    axiosInstance.post("/account/refresh/", {
        refresh
    });