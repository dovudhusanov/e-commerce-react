import axiosInstance from "../axios";

export const LogoutApi = (refresh) =>
    axiosInstance.post("/account/logout/", refresh);