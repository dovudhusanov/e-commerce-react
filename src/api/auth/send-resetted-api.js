import axiosInstance from "../axios";

export const SendResettedApi = (phone) =>
    axiosInstance.post("/account/send-resetted/", phone);