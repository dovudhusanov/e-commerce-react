import axios from "axios";

const api_url = process.env.API_URL

const axiosInstance = axios.create({
    baseURL: `https://abdusattor0707.pythonanywhere.com`,
});

axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;
        if (
            error.response.status === 401 &&
            !originalRequest._retry &&
            localStorage.getItem('refresh')
        ) {
            originalRequest._retry = true;
            try {
                const response = await axiosInstance.post('/account/refresh/', {
                    refresh: localStorage.getItem('refresh'),
                });
                localStorage.setItem('access', response.data.access);
                axiosInstance.defaults.headers.common['Authorization'] =
                    'Bearer ' + response.data.access;
                originalRequest.headers['Authorization'] = 'Bearer ' + response.data.access; // add this line to set Authorization header for the original request
                return axiosInstance(originalRequest);
            } catch (error) {
                console.log(error);
            }
        }

        return Promise.reject(error);
    }
);


export default axiosInstance;

//import axios from "axios";
//
// const api_url = process.env.API_URL
//
// const axiosInstance = axios.create({
//     baseURL: `https://abdusattor0707.pythonanywhere.com`,
// });
//
// axiosInstance.interceptors.response.use(
//     function (config) {
//         const access = localStorage.getItem('access');
//         if (access) {
//             config.headers.Authorization = `Bearer ${access}`;
//         }
//         return config;
//     },
//     function (error) {
//         return Promise.reject(error);
//     }
// );
//
// export default axiosInstance;