import styled from "styled-components";

const NewProductConatiner = styled.div`
  flex: 4;
  padding: 20px;
`;
const NewProductTitle = styled.h1``;
const NewProductForm = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const NewProductItem = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-right: 20px;
`;
const NewProductFormLabel = styled.label`
  font-size: 14px;
  margin-bottom: 10px;
  color: gray;
  font-weight: 600;
`;
const NewProductFormInput = styled.input`
  height: 20px;
  padding: 10px;
  border: 1px solid gray;
  border-radius: 5px;
`;

const NewProductSelect = styled.select`
  height: 40px;
  border-radius: 5px;
`;
const NewProductSelectOption = styled.option``;
const NewProductButton = styled.button`
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

const NewProduct = () => {
  return (
    <NewProductConatiner>
      <NewProductTitle>New Product</NewProductTitle>
      <NewProductForm>
        <NewProductItem>
          <NewProductFormLabel>Name</NewProductFormLabel>
          <NewProductFormInput
            type="text"
            placeholder="Apple Airpods"
          ></NewProductFormInput>
        </NewProductItem>

        <NewProductItem>
          <NewProductFormLabel>Stock</NewProductFormLabel>
          <NewProductFormInput
            type="text"
            placeholder="123"
          ></NewProductFormInput>
        </NewProductItem>

        <NewProductItem>
          <NewProductFormLabel>Active</NewProductFormLabel>
          <NewProductSelect name="active" id="active">
            <NewProductSelectOption value="yes">Yes</NewProductSelectOption>
            <NewProductSelectOption value="No">No</NewProductSelectOption>
          </NewProductSelect>
        </NewProductItem>

        <NewProductItem>
          <NewProductFormLabel>Image</NewProductFormLabel>
          <NewProductFormInput type="file" id="file"></NewProductFormInput>
        </NewProductItem>

        <NewProductButton>Create</NewProductButton>
      </NewProductForm>
    </NewProductConatiner>
  );
};

export default NewProduct;
