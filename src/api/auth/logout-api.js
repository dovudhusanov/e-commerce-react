import axiosInstance from "../index";

export const LogoutApi = (refresh) =>
    axiosInstance.post("/account/logout/", refresh);