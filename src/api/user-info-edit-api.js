import axiosInstance from ".";

export const UserInfoEditApi = (userInfo) =>
    axiosInstance.put("/profile/edit/", userInfo, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("access")}`
        }
    });