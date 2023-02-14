import axiosInstance from ".";

export const LoginApi = (userInfo: any) =>
    axiosInstance.post("/auth", userInfo);