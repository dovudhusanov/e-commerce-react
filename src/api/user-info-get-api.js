import axiosInstance from ".";

export const UserInfoGetApi = () =>
    axiosInstance.get("/profile/user-info/", {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("access")}`
        }
    });