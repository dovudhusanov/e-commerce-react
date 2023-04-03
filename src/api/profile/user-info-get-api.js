import axiosInstance from "../axios";

export const UserInfoGetApi = (id) =>
    axiosInstance.get(`/account/profile/${id}/`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("access")}`
        }
    });