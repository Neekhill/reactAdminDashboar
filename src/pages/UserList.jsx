import styled from "styled-components";
import { DataGrid } from "@mui/x-data-grid";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { UserRows } from "../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

const UserListContainer = styled.div`
  flex: 4;
`;
const UserListUser = styled.div`
  display: flex;
  align-items: center;
`;
const UserListImg = styled.img`
  height: 32px;
  width: 32px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;

const UserListButton = styled.button`
  border: none;
  padding: 5px 10px;
  border-radius: 10px;
  margin-right: 10px;
  background-color: #3bb077;
  color: white;
  cursor: pointer;
`;

const UserList = () => {
  const [data, setData] = useState(UserRows);
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const columns = [
    { field: "id", headerName: "ID", width: 120 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <UserListUser>
            <UserListImg src={params.row.avatar} alt=""></UserListImg>
            {params.row.username}
          </UserListUser>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    { field: "status", headerName: "Status", width: 130 },
    {
      field: "transaction",
      headerName: "Transaction",
      width: 150,
    },
    {
      field: "action",
      headerName: "action",
      width: 200,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.id}>
              <UserListButton>Edit</UserListButton>
            </Link>
            <DeleteOutlineIcon
              style={{ color: "red", cursor: "pointer" }}
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];
  return (
    <UserListContainer>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </UserListContainer>
  );
};

export default UserList;
