import axiosInstance from "../index";

export const ChangePhoneNumberApi = (phone) =>
    axiosInstance.patch("/account/change-phone/", phone, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("access")}`
        }
    });