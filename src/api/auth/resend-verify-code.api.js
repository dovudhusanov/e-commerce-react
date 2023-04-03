import axiosInstance from "../axios";

export const ResendVerifyCodeApi = (verifyCode) =>
    axiosInstance.post("/account/resend-code/", verifyCode);