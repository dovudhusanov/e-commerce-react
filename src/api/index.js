import axios from "axios";

const api_url = process.env.API_URL

const axiosInstance = axios.create({
    baseURL: `${api_url}/api`,
});

// @ts-ignore
axiosInstance.interceptors.request.use((req, error) => {
    if (localStorage.getItem("admin")) {
        req.headers.Authorization = `Bearer ${
            // @ts-ignore
            JSON.parse(localStorage.getItem("admin")).token
        }`
    }

    if (error) {
        let res = error.response;
        if (res.payload.status === 400) {
            window.location.href = `${api_url}/api/auth`;
        }
        console.error("Looks like there was a problem. Status Code:" + res.status);
        return Promise.reject(error);
    }

    return req;
});

export default axiosInstance;