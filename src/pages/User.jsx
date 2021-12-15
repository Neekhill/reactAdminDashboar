import {
  CalendarToday,
  LocationSearching,
  MailOutlined,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import styled from "styled-components";
import nikhil2 from "../assets/nikhil2.jpg";

const UserMainContainer = styled.div`
  flex: 4;
  padding: 20px;
`;
const UserTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const UserTitle = styled.h1``;
const UserTitleCreateButton = styled.button`
  width: 80px;
  font-size: 16px;
  padding: 5px;
  border-radius: 5px;
  background-color: teal;
  border: none;
  color: white;
  cursor: pointer;
`;

const UserContainer = styled.div`
  margin-top: 20px;
  display: flex;
`;
const UserShow = styled.div`
  flex: 1;
  padding: 20px;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;
const UserShowTop = styled.div`
  display: flex;
  align-items: center;
`;
const UserShowTopImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;
const UserShowTopTile = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;
const UserShowTopUsername = styled.span`
  font-weight: 600;
`;
const UserShowTopUserTitle = styled.span`
  font-weight: 300;
`;

const UserShowBottom = styled.div`
  margin-top: 20px;
`;
const UserShowBottomTitle = styled.span`
  font-size: 14px;
  color: rgb(175, 170, 170);
  font-weight: 600;
`;
const UserShowBottomInfo = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
  color: #444;
`;
const UserShowBottomInfoIcon = styled.span`
  font-size: 16px !important;
`;
const UserShowBottomInfoTitle = styled.span`
  margin-left: 10px;
`;

const UserUpdate = styled.div`
  flex: 2;
  padding: 20px;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  margin-left: 20px;
`;

const UserUpdateTitle = styled.span`
  font-size: 24px;
  font-weight: 600;
`;
const UserUpdateForm = styled.form`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;
const UserUpdateFormLeft = styled.div``;
const UserUpdateFormItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;
const UserUpdateFormLabel = styled.label`
  font-size: 14px;
  margin-bottom: 5px;
`;
const UserUpdateFormInput = styled.input`
  width: 250px;
  height: 30px;
  border: none;
  border-bottom: 1px solid gray;
`;

const UserUpdateFormRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const UserUpdateFormRightUpload = styled.div`
  display: flex;
  align-items: center;
`;
const UserUpdateFormRightUploadImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 10px;
  object-fit: cover;
  margin-right: 10px;
`;
const UserUpdateFormRightLabel = styled.label`
  cursor: pointer;
`;
const UserUpdateFormRightInput = styled.input`
  display: none;
`;
const UserUpdateButton = styled.button`
  border: none;
  background-color: darkblue;
  border-radius: 5px;
  padding: 5px;
  color: white;
  cursor: pointer;
  font-weight: 600;
`;

const User = () => {
  return (
    <UserMainContainer>
      <UserTitleContainer>
        <UserTitle>Edit</UserTitle>
        <Link to="/newUser">
          <UserTitleCreateButton>Create</UserTitleCreateButton>
        </Link>
      </UserTitleContainer>

      <UserContainer>
        <UserShow>
          <UserShowTop>
            <UserShowTopImg src={nikhil2} alt=""></UserShowTopImg>
            <UserShowTopTile>
              <UserShowTopUsername>Nikhil Yadav</UserShowTopUsername>
              <UserShowTopUserTitle>Software Engineer</UserShowTopUserTitle>
            </UserShowTopTile>
          </UserShowTop>

          <UserShowBottom>
            <UserShowBottomTitle>Account Details</UserShowBottomTitle>
            <UserShowBottomInfo>
              <UserShowBottomInfoIcon>
                <PermIdentity />
              </UserShowBottomInfoIcon>
              <UserShowBottomInfoTitle>neek_hill</UserShowBottomInfoTitle>
            </UserShowBottomInfo>

            <UserShowBottomInfo>
              <UserShowBottomInfoIcon>
                <CalendarToday />
              </UserShowBottomInfoIcon>
              <UserShowBottomInfoTitle>27 Aug 1993</UserShowBottomInfoTitle>
            </UserShowBottomInfo>

            <UserShowBottomTitle>Contact Details</UserShowBottomTitle>
            <UserShowBottomInfo>
              <UserShowBottomInfoIcon>
                <PhoneAndroid />
              </UserShowBottomInfoIcon>
              <UserShowBottomInfoTitle>+91 8369757494</UserShowBottomInfoTitle>
            </UserShowBottomInfo>

            <UserShowBottomInfo>
              <UserShowBottomInfoIcon>
                <MailOutlined />
              </UserShowBottomInfoIcon>
              <UserShowBottomInfoTitle>
                nikhilyadav331@gmail.com
              </UserShowBottomInfoTitle>
            </UserShowBottomInfo>

            <UserShowBottomInfo>
              <UserShowBottomInfoIcon>
                <LocationSearching />
              </UserShowBottomInfoIcon>
              <UserShowBottomInfoTitle>
                Saket,New delhi | india
              </UserShowBottomInfoTitle>
            </UserShowBottomInfo>
          </UserShowBottom>
        </UserShow>

        <UserUpdate>
          <UserUpdateTitle>Edit</UserUpdateTitle>
          <UserUpdateForm>
            <UserUpdateFormLeft>
              <UserUpdateFormItem>
                <UserUpdateFormLabel>Username</UserUpdateFormLabel>
                <UserUpdateFormInput
                  type="text"
                  placeholder="neek_hill"
                ></UserUpdateFormInput>
              </UserUpdateFormItem>

              <UserUpdateFormItem>
                <UserUpdateFormLabel>Birthday</UserUpdateFormLabel>
                <UserUpdateFormInput
                  type="text"
                  placeholder="27 Aug 1993"
                ></UserUpdateFormInput>
              </UserUpdateFormItem>

              <UserUpdateFormItem>
                <UserUpdateFormLabel>Phone Number</UserUpdateFormLabel>
                <UserUpdateFormInput
                  type="text"
                  placeholder="+91 8368757494"
                ></UserUpdateFormInput>
              </UserUpdateFormItem>

              <UserUpdateFormItem>
                <UserUpdateFormLabel>Email</UserUpdateFormLabel>
                <UserUpdateFormInput
                  type="text"
                  placeholder="nikhilyadav331@gmail.com"
                ></UserUpdateFormInput>
              </UserUpdateFormItem>

              <UserUpdateFormItem>
                <UserUpdateFormLabel>Address</UserUpdateFormLabel>
                <UserUpdateFormInput
                  type="text"
                  placeholder="New delhi | india"
                ></UserUpdateFormInput>
              </UserUpdateFormItem>
            </UserUpdateFormLeft>

            <UserUpdateFormRight>
              <UserUpdateFormRightUpload>
                <UserUpdateFormRightUploadImg
                  src={nikhil2}
                  alt=""
                ></UserUpdateFormRightUploadImg>
                <UserUpdateFormRightLabel for="file">
                  <Publish />
                </UserUpdateFormRightLabel>
                <UserUpdateFormRightInput
                  type="file"
                  id="file"
                ></UserUpdateFormRightInput>
              </UserUpdateFormRightUpload>
              <UserUpdateButton>Update</UserUpdateButton>
            </UserUpdateFormRight>
          </UserUpdateForm>
        </UserUpdate>
      </UserContainer>
    </UserMainContainer>
  );
};

export default User;
