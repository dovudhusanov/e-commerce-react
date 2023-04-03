import axiosInstance from "../axios";

export const DeleteProfileApi = (id) =>
    axiosInstance.delete(`/account/profile/${id}/`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("access")}`
        }
    });