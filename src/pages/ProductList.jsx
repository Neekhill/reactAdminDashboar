import styled from "styled-components";
import { DataGrid } from "@mui/x-data-grid";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { productRows } from "../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

const ProductListContainer = styled.div`
  flex: 4;
`;
const ProductListItem = styled.div`
  display: flex;
  align-items: center;
`;
const ProductListImg = styled.img`
  height: 32px;
  width: 32px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;

const ProductListButton = styled.button`
  border: none;
  padding: 5px 10px;
  border-radius: 10px;
  margin-right: 10px;
  background-color: #3bb077;
  color: white;
  cursor: pointer;
`;

const ProductList = () => {
  const [data, setData] = useState(productRows);
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 120 },
    {
      field: "Product",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (
          <ProductListItem>
            <ProductListImg src={params.row.img} alt=""></ProductListImg>
            {params.row.name}
          </ProductListItem>
        );
      },
    },
    { field: "stock", headerName: "Stock", width: 200 },
    { field: "status", headerName: "Status", width: 130 },
    {
      field: "price",
      headerName: "Price",
      width: 150,
    },
    {
      field: "action",
      headerName: "action",
      width: 200,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row.id}>
              <ProductListButton>Edit</ProductListButton>
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
    <ProductListContainer>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </ProductListContainer>
  );
};

export default ProductList;
