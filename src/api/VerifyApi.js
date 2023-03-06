import axiosInstance from ".";

export const VerifyApi = (verifyCode) =>
    axiosInstance.post("/account/verify/", verifyCode);