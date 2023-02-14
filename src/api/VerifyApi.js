import axiosInstance from ".";

export const VerifyApi = (verifyCode) =>
    axiosInstance.post("/verify", verifyCode);