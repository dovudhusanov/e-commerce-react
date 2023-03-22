import axiosInstance from ".";

export const ResetPasswordApi = (phone) =>
    axiosInstance.post("/account/reset-password/", phone);