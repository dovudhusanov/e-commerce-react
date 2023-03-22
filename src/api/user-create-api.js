import axiosInstance from ".";

export const UserCreateApi = (userInfo) =>
    axiosInstance.post("/profile/create/", userInfo, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("access")}`
        }
    });