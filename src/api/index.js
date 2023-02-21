import axios from "axios";

const api_url = process.env.API_URL

const axiosInstance = axios.create({
    baseURL: `https://3de1-94-141-68-175.ap.ngrok.io`,
});

axiosInstance.interceptors.response.use((response) => response,
    async (error) => {
        const originalRequest = error.config;

        if (
            error.response.status === 401 &&
            !originalRequest._retry &&
            localStorage.getItem('refresh_token')
        ) {
            originalRequest._retry = true;
            try {
                const response = await axios.post('/account/refresh', {
                    refresh_token: localStorage.getItem('refresh_token'),
                });
                localStorage.setItem('access_token', response.data.access_token);
                axiosInstance.defaults.headers.common['Authorization'] =
                    'Bearer ' + response.data.access_token;
                return axiosInstance(originalRequest);
            } catch (error) {
                console.log(error);
            }
        }

        return Promise.reject(error);
    }
);

export default axiosInstance;