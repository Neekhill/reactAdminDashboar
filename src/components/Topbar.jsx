import { Language, NotificationsNone, Settings } from "@mui/icons-material";
import styled from "styled-components";
import nikhil2 from "../assets/nikhil2.jpg";

const Top = styled.div`
  width: 100%;
  height: 50px;
  position: static;
  top: 0;
  z-index: 999;
`;
const TopWrapper = styled.div`
  height: 100%;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const TopLeft = styled.div``;
const Logo = styled.span`
  font-weight: bold;
  font-size: 30px;
  color: darkblue;
  cursor: pointer;
`;
const TopRight = styled.div`
  display: flex;
  align-items: center;
`;
const TopIconContainer = styled.div`
  position: relative;
  cursor: pointer;
  margin-right: 10px;
  color: #555;
`;
const TopIconBadge = styled.span`
  position: absolute;
  top: -6px;
  right: -3px;
  width: 15px;
  height: 15px;
  background-color: red;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 10px;
`;
const TopAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

const Topbar = () => {
  return (
    <Top>
      <TopWrapper>
        <TopLeft>
          <Logo>NIK.ADMIN</Logo>
        </TopLeft>
        <TopRight>
          <TopIconContainer>
            <NotificationsNone />
            <TopIconBadge>2</TopIconBadge>
          </TopIconContainer>
          <TopIconContainer>
            <Language />
            <TopIconBadge>2</TopIconBadge>
          </TopIconContainer>
          <TopIconContainer>
            <Settings />
            <TopIconBadge>2</TopIconBadge>
          </TopIconContainer>
          <TopAvatar src={nikhil2}></TopAvatar>
        </TopRight>
      </TopWrapper>
    </Top>
  );
};

export default Topbar;
