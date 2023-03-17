import React, {useRef, useState} from 'react';
import ProfileDashboardLayout from "../../../../layout/profile-dashboard-layout";
import img from "../../../../assets/userInitialImg.png"
import {
    UserInfo,
    UserInfoInput,
    InfoItem,
} from "./my-infos.styles";
import SelectUserImg from "./components/select-user-img";
import {userData} from "../../../../data/data";

function MyInfos() {
    return (
        <ProfileDashboardLayout>
            <UserInfo>
                <UserInfoInput>
                    {userData.map(user => (
                        <InfoItem key={user.id}>
                            <label>{user.labelName}</label>
                            <span>{user.key}</span>
                        </InfoItem>
                    ))}
                </UserInfoInput>
                <SelectUserImg src={img}/>
            </UserInfo>
        </ProfileDashboardLayout>
    );
}

export default MyInfos;