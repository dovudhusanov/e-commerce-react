import axiosInstance from "../index";

export const ResendVerifyCodeApi = (verifyCode) =>
    axiosInstance.post("/account/resend-code/", verifyCode);