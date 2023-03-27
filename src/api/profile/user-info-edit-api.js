import axiosInstance from "../index";

export const UserInfoEditApi = (userInfo, id) =>
    axiosInstance.patch(`/account/profile/${id}/`, userInfo, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("access")}`
        }
    });