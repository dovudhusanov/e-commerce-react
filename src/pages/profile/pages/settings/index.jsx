import React from 'react';
import ProfileDashboardLayout from "../../../../layout/profile-dashboard-layout";
import {UserSettings} from "./settings.styles";
import UserSettingsForm from "./components/user-settings-form";
function Settings() {
    return (
        <ProfileDashboardLayout>
            <UserSettings>
                <UserSettingsForm/>
            </UserSettings>
        </ProfileDashboardLayout>
    );
}

export default Settings;