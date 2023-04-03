import axiosInstance from "../axios";

export const ResetPasswordApi = (phone) =>
    axiosInstance.post("/account/reset-password/", phone);