import axiosInstance from "../axios";

export const UploadImgApi = (formatData) =>
    axiosInstance.post(`/account/upload-image/`, formatData, {
        headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${localStorage.getItem("access")}`
        },
    });