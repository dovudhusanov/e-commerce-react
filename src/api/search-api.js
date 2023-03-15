import axiosInstance from ".";

export const SearchApi = (searchParams) =>
    axiosInstance.get(`/search?query=${searchParams}`);