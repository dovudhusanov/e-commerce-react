import axiosInstance from ".";

export const UploadImgApi = (formatData) =>
    axiosInstance.post(`/account/upload-image/`, formatData, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("access")}`,
            'Content-Type': 'multipart/form-data'
        }
    });