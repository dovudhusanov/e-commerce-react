import React, {useEffect, useRef, useState} from 'react';
import ProfileDashboardLayout from "../../../../layout/profile-dashboard-layout";
import img from "../../../../assets/userInitialImg.png"
import {
    UserInfo,
    UserInfoInput,
    InfoItem,
} from "./my-infos.styles";
import SelectUserImg from "./components/select-user-img";
import {UserInfoGetApi} from "../../../../api/profile/user-info-get-api";
import {GetUserApi} from "../../../../api/profile/get-user-api";
import Loader from "../../../../components/loader";
import {Link} from "react-router-dom";

function MyInfos() {

    const [user, setUser] = useState([])
    const [phone, setPhone] = useState("")
    const [loading, setLoading] = useState(false)

    async function getUserInfo() {
        setLoading(true)
        const userRes = await GetUserApi(localStorage.getItem("userId"))
        setPhone(userRes.data.phone)
        userRes?.data?.profile && localStorage.setItem("profileId", userRes.data.profile)
        const response = await UserInfoGetApi(localStorage.getItem("profileId"))
        setUser(response.data)
        setLoading(false)
    }

    useEffect(() => {
        getUserInfo()
    }, [])

    const {first_name, last_name, email} = user

    return (
        <ProfileDashboardLayout>
            {loading ? (
                <Loader/>
            ) : (
                <UserInfo>
                    <UserInfoInput>
                        <InfoItem>
                            <label>First Name</label>
                            <span>{first_name ? first_name : "-----------------"}</span>
                        </InfoItem>
                        <InfoItem>
                            <label>Last Name</label>
                            <span>{last_name ? last_name : "-----------------"}</span>
                        </InfoItem>
                        <InfoItem>
                            <label>E-mail</label>
                            <span>{email ? email : "-----------------"}</span>
                        </InfoItem>
                        <InfoItem>
                            <label>Phone Number</label>
                            <span>{email ? phone : "-----------------"}</span>
                        </InfoItem>
                        <InfoItem>
                            <label style={{opacity: 0}}>.</label>
                            <span style={{fontSize: "16px"}}>
                                 <Link to={"/user/settings"}>Edit <i className="fa-solid fa-pen"></i></Link>
                            </span>

                        </InfoItem>
                    </UserInfoInput>
                    <SelectUserImg src={img}/>
                </UserInfo>
            )}
        </ProfileDashboardLayout>
    );
}

export default MyInfos;
