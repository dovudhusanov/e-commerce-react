import axiosInstance from "../index";

export const VerifyApi = (verifyCode) =>
    axiosInstance.post("/account/verify/", verifyCode);