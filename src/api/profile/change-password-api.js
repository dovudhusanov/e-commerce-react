import axiosInstance from "../index";

export const ChangePasswordApi = (password) =>
    axiosInstance.put("/account/change_password/", password, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("access")}`
        }
    });