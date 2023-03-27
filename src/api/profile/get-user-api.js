import axiosInstance from "../index";

export const GetUserApi = (id) =>
    axiosInstance.get(`/account/user/${id}/`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("access")}`
        }
    });