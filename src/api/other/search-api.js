import axiosInstance from "../index";

export const SearchApi = (searchParams) =>
    axiosInstance.get(`/search?query=${searchParams}`);