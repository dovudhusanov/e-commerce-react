import React from 'react';
import {DashboardStyle, TopItems, BottomItems, DashboardItems} from "./dashboard.styles";
import {dashboardLinksData} from "./data";
import {NavLink} from "react-router-dom";
import LogoutBtn from "../../pages/profile/components/logout";

function Dashboard() {
    return (
        <DashboardStyle>
            <TopItems>
                {dashboardLinksData.map(data => (
                    <NavLink to={`/user/${data.pathName}`} key={data.id}>{data.linkName}</NavLink>
                ))}
            </TopItems>
        </DashboardStyle>
    );
}

export default Dashboard;