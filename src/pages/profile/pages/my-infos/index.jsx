import React, {useEffect, useRef, useState} from 'react';
import ProfileDashboardLayout from "../../../../layout/profile-dashboard-layout";
import img from "../../../../assets/userInitialImg.png"
import {
    UserInfo,
    UserInfoInput,
    InfoItem,
} from "./my-infos.styles";
import SelectUserImg from "./components/select-user-img";
import axiosInstance from "../../../../api";
import {UserInfoGetApi} from "../../../../api/user-info-get-api";

function MyInfos() {

    const [user, setUser] = useState([])

    async function getUserInfo() {
        const response = await UserInfoGetApi(4)
        setUser(response.data)
    }

    useEffect(() => {
        getUserInfo()
    }, [])

    const {first_name, last_name, email} = user

    return (
        <ProfileDashboardLayout>
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
                </UserInfoInput>
                <SelectUserImg src={img}/>
            </UserInfo>
        </ProfileDashboardLayout>
    );
}

export default MyInfos;