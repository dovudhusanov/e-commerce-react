import axiosInstance from "../index";

export const ResetPasswordApi = (phone) =>
    axiosInstance.post("/account/reset-password/", phone);