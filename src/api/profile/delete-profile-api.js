import axiosInstance from "../index";

export const DeleteProfileApi = (id) =>
    axiosInstance.delete(`/account/profile/${id}/`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("access")}`
        }
    });