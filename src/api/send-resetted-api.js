import axiosInstance from ".";

export const SendResettedApi = (phone) =>
    axiosInstance.post("/account/send-resetted/", phone);