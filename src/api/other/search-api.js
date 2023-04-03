import axiosInstance from "../axios";

export const SearchApi = (searchParams) =>
    axiosInstance.get(`/search?query=${searchParams}`);