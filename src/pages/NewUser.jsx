import styled from "styled-components";

const NewUserConatiner = styled.div`
  flex: 4;
`;
const NewUserTitle = styled.h1``;
const NewUserForm = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const NewUserFormItem = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-right: 20px;
`;
const NewUserFormLabel = styled.label`
  font-size: 14px;
  margin-bottom: 10px;
  color: gray;
  font-weight: 600;
`;
const NewUserFormInput = styled.input`
  height: 20px;
  padding: 10px;
  border: 1px solid gray;
  border-radius: 5px;
`;
const NewUserGender = styled.div``;
const NewUserGenderFormInput = styled.input`
  margin-top: 15px;
`;
const NewUserGenderFormLabel = styled.label`
  margin: 10px;
  font-size: 18px;
  color: #555;
`;

const NewUserSelect = styled.select`
  height: 40px;
  border-radius: 5px;
`;
const NewUserSelectOption = styled.option``;
const NewUserButton = styled.button`
  width: 400px;
  border: none;
  background-color: darkblue;
  color: white;
  padding: 10px 10px;
  font-weight: 600;
  border-radius: 10px;
  margin-top: 80px;
  cursor: pointer;
`;

const NewUser = () => {
  return (
    <NewUserConatiner>
      <NewUserTitle>New User</NewUserTitle>
      <NewUserForm>
        <NewUserFormItem>
          <NewUserFormLabel>Username</NewUserFormLabel>
          <NewUserFormInput type="text" placeholder="nikhil"></NewUserFormInput>
        </NewUserFormItem>

        <NewUserFormItem>
          <NewUserFormLabel>Full Name</NewUserFormLabel>
          <NewUserFormInput
            type="text"
            placeholder="Nikhil Yadav"
          ></NewUserFormInput>
        </NewUserFormItem>

        <NewUserFormItem>
          <NewUserFormLabel>Email</NewUserFormLabel>
          <NewUserFormInput
            type="Email"
            placeholder="nikhilyadav331@gmail.com"
          ></NewUserFormInput>
        </NewUserFormItem>

        <NewUserFormItem>
          <NewUserFormLabel>Phone Number</NewUserFormLabel>
          <NewUserFormInput
            type="text"
            placeholder="+91 1234567898"
          ></NewUserFormInput>
        </NewUserFormItem>

        <NewUserFormItem>
          <NewUserFormLabel>Address</NewUserFormLabel>
          <NewUserFormInput
            type="text"
            placeholder="Delhi | India"
          ></NewUserFormInput>
        </NewUserFormItem>

        <NewUserFormItem>
          <NewUserFormLabel>Gender</NewUserFormLabel>
          <NewUserGender>
            <NewUserGenderFormInput
              type="radio"
              name="gender"
              id="male"
              value="male"
            ></NewUserGenderFormInput>
            <NewUserGenderFormLabel for="male">Male</NewUserGenderFormLabel>

            <NewUserGenderFormInput
              type="radio"
              name="gender"
              id="female"
              value="female"
            ></NewUserGenderFormInput>
            <NewUserGenderFormLabel for="female">Female</NewUserGenderFormLabel>

            <NewUserGenderFormInput
              type="radio"
              name="gender"
              id="other"
              value="other"
            ></NewUserGenderFormInput>
            <NewUserGenderFormLabel for="other">Other</NewUserGenderFormLabel>
          </NewUserGender>
        </NewUserFormItem>

        <NewUserFormItem>
          <NewUserFormLabel>Active</NewUserFormLabel>
          <NewUserSelect name="active" id="active">
            <NewUserSelectOption value="yes">Yes</NewUserSelectOption>
            <NewUserSelectOption value="No">No</NewUserSelectOption>
          </NewUserSelect>
        </NewUserFormItem>

        <NewUserFormItem>
          <NewUserFormLabel>Password</NewUserFormLabel>
          <NewUserFormInput
            type="password"
            placeholder="xyz@123"
          ></NewUserFormInput>
        </NewUserFormItem>
        <NewUserButton>Create</NewUserButton>
      </NewUserForm>
    </NewUserConatiner>
  );
};

export default NewUser;
