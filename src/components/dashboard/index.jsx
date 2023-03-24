import React from 'react';
import {DashboardStyle, TopItems} from "./dashboard.styles";
import {dashboardLinksData} from "./data";
import {NavLink} from "react-router-dom";

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