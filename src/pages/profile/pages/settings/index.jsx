import React from 'react';
import ProfileDashboardLayout from "../../../../layout/profile-dashboard-layout";
import SelectUserImg from "../my-infos/components/select-user-img";
import img from "../../../../assets/userInitialImg.png";
import {UserSettings} from "./settings.styles";
import UserSettingsForm from "./components/user-settings-form";

function Settings() {
    return (
        <ProfileDashboardLayout>
            <UserSettings>
                <UserSettingsForm/>
                <SelectUserImg src={img} setting={true}/>
            </UserSettings>
        </ProfileDashboardLayout>
    );
}

export default Settings;