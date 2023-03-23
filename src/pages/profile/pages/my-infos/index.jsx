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

    // async function getUserInfo() {
    //     const response = await UserInfoGetApi()
    //     setUser(response?.data)
    // }
    //
    // useEffect(() => {
    //     getUserInfo()
    // }, [])

    return (
        <ProfileDashboardLayout>
            <UserInfo>
                <UserInfoInput>
                    <InfoItem>
                        <label>First Name</label>
                        <span>-----------</span>
                    </InfoItem>
                    <InfoItem>
                        <label>Last Name</label>
                        <span>-----------</span>
                    </InfoItem>
                    <InfoItem>
                        <label>E-mail</label>
                        <span>-----------</span>
                    </InfoItem>
                    <InfoItem>
                        <label>Phone Number</label>
                        <span>-----------</span>
                    </InfoItem>
                    {/*{user?.map(user => (*/}
                    {/* */}
                    {/*))}*/}
                </UserInfoInput>
                <SelectUserImg src={img}/>
            </UserInfo>
        </ProfileDashboardLayout>
    );
}

export default MyInfos;