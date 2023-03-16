import React from 'react';
import {DashboardLayout, ProfileDashboardItem} from "./profile-dashboard-layout.styles";
import {Dashboard} from "../../components";

function ProfileDashboardLayout({children}) {
    return (
        <div className="container">
            <DashboardLayout>
                <Dashboard/>
                <ProfileDashboardItem>
                    {children}
                </ProfileDashboardItem>
            </DashboardLayout>
        </div>

    );
}

export default ProfileDashboardLayout;