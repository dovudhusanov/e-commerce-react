import axiosInstance from "../axios";

export const VerifyApi = (verifyCode) =>
    axiosInstance.post("/account/verify/", verifyCode);