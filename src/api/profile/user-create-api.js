import axiosInstance from "../axios";

export const UserCreateApi = (userInfo) =>
    axiosInstance.post("/account/profile/", userInfo, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("access")}`
        }
    });