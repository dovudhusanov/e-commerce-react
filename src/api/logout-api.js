import axiosInstance from ".";

export const LogoutApi = (refresh) =>
    axiosInstance.post("/account/logout/", refresh);