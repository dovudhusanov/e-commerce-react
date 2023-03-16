import React from 'react';
import ProfileDashboardLayout from "../../../../layout/profile-dashboard-layout";
import img from "../../../../assets/userInitialImg.png"
import {UserInfo, UserInfoInput, UserImg, InfoItem} from "./my-infos.styles";

function MyInfos() {
    return (
        <ProfileDashboardLayout>
            <UserInfo>
                <UserInfoInput>
                    <InfoItem>
                        <label>Name</label>
                        <span>Dovudhon</span>
                    </InfoItem>
                    <InfoItem>
                        <label>Last Name</label>
                        <span>Husanov</span>
                    </InfoItem>
                    <InfoItem>
                        <label>Email</label>
                        <span>dovudkhonhusanov5007@gmail.com</span>
                    </InfoItem>
                    <InfoItem>
                        <label>Phone Number</label>
                        <span>+998 97 681 50 07</span>
                    </InfoItem>
                </UserInfoInput>
                <UserImg>
                    <img src={img} alt="user img"/>
                </UserImg>
            </UserInfo>
        </ProfileDashboardLayout>
    );
}

export default MyInfos;