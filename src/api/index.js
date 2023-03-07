import axios from "axios";

const api_url = process.env.API_URL

const axiosInstance = axios.create({
    baseURL: `https://abdusattor0707.pythonanywhere.com`,
});

axiosInstance.interceptors.response.use(
    function (config) {
        const token = localStorage.getItem('access');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

export default axiosInstance;