import {
  AnalyticsOutlined,
  AttachMoney,
  BarChart,
  ChatBubbleOutline,
  DynamicFeed,
  HomeOutlined,
  MailOutline,
  PermIdentity,
  Storefront,
  TrendingUp,
  WorkOutline,
} from "@mui/icons-material";
import React from "react";
import styled from "styled-components";

const Sidebar = styled.div`
  flex: 1;
  height: cal(100vh - 50px);
  background-color: rgb(251, 251, 255);
  position: sticky;
  top: 50px;
`;
const SidebarWrapper = styled.div`
  padding: 20px;
  color: #555;
`;
const SidebarMenu = styled.div`
  margin-bottom: 10px;
`;
const SidebarTitle = styled.h3`
  font-size: 13px;
  color: rgb(187, 186, 186);
`;
const SidebarList = styled.ul`
  list-style: none;
  padding: 5px;
`;
const SidebarListItem = styled.li`
  padding: 5px;
  cursor: pointer;
  border-radius: 10px;
  background-color: ${(props) =>
    props.active === "true" && "rgb(240, 240, 255)"};
  &:hover {
    background-color: rgb(228, 228, 250);
  }
`;

const SidebarIcon = styled.div`
  display: flex;
  align-items: center;
  margin-right: 5px;
  font-size: 17px;
`;

const SideBar = () => {
  return (
    <Sidebar>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarTitle>Dashboard</SidebarTitle>
          <SidebarList>
            <SidebarListItem active="true">
              <SidebarIcon>
                <HomeOutlined style={{ marginRight: 5 }} /> Home
              </SidebarIcon>
            </SidebarListItem>
            <SidebarListItem>
              <SidebarIcon>
                <AnalyticsOutlined style={{ marginRight: 5 }} /> Analystics
              </SidebarIcon>
            </SidebarListItem>
            <SidebarListItem>
              <SidebarIcon>
                <TrendingUp style={{ marginRight: 5 }} /> Sales
              </SidebarIcon>
            </SidebarListItem>
          </SidebarList>
        </SidebarMenu>

        <SidebarMenu>
          <SidebarTitle>Quick Menu</SidebarTitle>
          <SidebarList>
            <SidebarListItem active="true">
              <SidebarIcon>
                <PermIdentity style={{ marginRight: 5 }} /> Users
              </SidebarIcon>
            </SidebarListItem>
            <SidebarListItem>
              <SidebarIcon>
                <Storefront style={{ marginRight: 5 }} /> Products
              </SidebarIcon>
            </SidebarListItem>
            <SidebarListItem>
              <SidebarIcon>
                <AttachMoney style={{ marginRight: 5 }} /> Transactions
              </SidebarIcon>
            </SidebarListItem>
            <SidebarListItem>
              <SidebarIcon>
                <BarChart style={{ marginRight: 5 }} /> Reports
              </SidebarIcon>
            </SidebarListItem>
          </SidebarList>
        </SidebarMenu>

        <SidebarMenu>
          <SidebarTitle>Notifications</SidebarTitle>
          <SidebarList>
            <SidebarListItem active="true">
              <SidebarIcon>
                <MailOutline style={{ marginRight: 5 }} /> Mail
              </SidebarIcon>
            </SidebarListItem>
            <SidebarListItem>
              <SidebarIcon>
                <DynamicFeed style={{ marginRight: 5 }} /> Feedback
              </SidebarIcon>
            </SidebarListItem>
            <SidebarListItem>
              <SidebarIcon>
                <ChatBubbleOutline style={{ marginRight: 5 }} /> Messages
              </SidebarIcon>
            </SidebarListItem>
          </SidebarList>
        </SidebarMenu>

        <SidebarMenu>
          <SidebarTitle>Staff</SidebarTitle>
          <SidebarList>
            <SidebarListItem active="true">
              <SidebarIcon>
                <WorkOutline style={{ marginRight: 5 }} /> Manage
              </SidebarIcon>
            </SidebarListItem>
            <SidebarListItem>
              <SidebarIcon>
                <AnalyticsOutlined style={{ marginRight: 5 }} /> Analystics
              </SidebarIcon>
            </SidebarListItem>
            <SidebarListItem>
              <SidebarIcon>
                <TrendingUp style={{ marginRight: 5 }} /> Sales
              </SidebarIcon>
            </SidebarListItem>
          </SidebarList>
        </SidebarMenu>
      </SidebarWrapper>
    </Sidebar>
  );
};

export default SideBar;
