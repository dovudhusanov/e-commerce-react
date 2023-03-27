import axiosInstance from "../index";

export const DeleteUserApi = (id) =>
    axiosInstance.delete(`/account/user/${id}/`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("access")}`
        }
    });