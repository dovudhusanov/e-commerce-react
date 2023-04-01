import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import {Products} from "../../components";
import {ChangeTitle, ScrollTop} from "../../middleware";
import {GetUserApi} from "../../api/profile/get-user-api";

function Home() {
    ScrollTop();
    ChangeTitle("E-Commerce")
    const products = useSelector(state => state.ProductsReducer);
    const imageChange = useSelector(state => state.ChangeImageStatesReducer)

    async function getUserInfo() {
        const userRes = await GetUserApi(localStorage.getItem("userId"))
        userRes?.data?.profile && localStorage.setItem("profileId", userRes.data.profile)
    }

    useEffect(() => {
        getUserInfo()
    }, [imageChange.isLoggedIn, window.location.href === "/"])

    return (
        <div className="container">
            <Products
                products={products.products}
            />
        </div>
    );
}

export default Home;