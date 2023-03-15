import axios from "axios";

const api_url = process.env.API_URL

const axiosInstance = axios.create({
    baseURL: `https://abdusattor0707.pythonanywhere.com`,
});

axiosInstance.interceptors.request.use((req, error) => {
    if (localStorage.getItem("access")) {
        req.headers = {
            Authorization: `Bearer ${localStorage.getItem("access")}`
        }
    }

    return req;

    if(error) {
        return  Promise.reject(error)
    }
});

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