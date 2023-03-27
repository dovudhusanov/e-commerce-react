import axiosInstance from "../index";

export const SendResettedApi = (phone) =>
    axiosInstance.post("/account/send-resetted/", phone);