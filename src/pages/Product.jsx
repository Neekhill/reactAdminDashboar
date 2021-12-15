import { Publish } from "@mui/icons-material";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Chart from "../components/Chart";
import { productData } from "../dummyData";

const ProductMainContainer = styled.div`
  flex: 4;
  padding: 20px;
`;
const ProductTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ProductTitle = styled.h1``;
const ProductTitleCreateButton = styled.button`
  width: 80px;
  font-size: 16px;
  padding: 5px;
  border-radius: 5px;
  background-color: teal;
  border: none;
  color: white;
  cursor: pointer;
`;
const ProductTop = styled.div`
  display: flex;
`;
const ProductTopLeft = styled.div`
  flex: 1;
`;
const ProductTopRight = styled.div`
  flex: 1;
  padding: 20px;
  margin: 20px;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;
const ProductInfoTop = styled.div`
  display: flex;
  align-items: center;
`;
const ProductInfoTopImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 20px;
`;
const ProductInfoTopname = styled.span`
  font-weight: 600;
`;
const ProductInfoBottom = styled.div`
  margin-top: 10px;
`;
const ProductInfoItem = styled.div`
  width: 150px;
  display: flex;
  justify-content: space-between;
`;
const ProductInfoItemKey = styled.span``;
const ProductInfoItemValue = styled.span`
  font-weight: 300;
`;

const ProductBottom = styled.div`
  padding: 20px;
  margin: 20px;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;

const ProductForm = styled.form`
  display: flex;
  justify-content: space-between;
`;
const ProductFormLeft = styled.div`
  display: flex;
  flex-direction: column;
`;
const ProductFormLeftItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;
const ProductFormLeftLabel = styled.label`
  font-size: 14px;
  margin-bottom: 10px;
`;
const ProductFormInput = styled.input`
  margin-bottom: 10px;
  width: 250px;
  border: none;
  padding: 5px;
  border-bottom: 1px solid gray;
`;
const ProductSelect = styled.select`
  margin-bottom: 10px;
  height: 40px;
`;
const ProductSelectOption = styled.option``;

const ProductFormRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ProductFormRightUpload = styled.div`
  display: flex;
  align-items: center;
`;
const ProductFormRightUploadImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 10px;
  object-fit: cover;
  margin-right: 20px;
`;
const ProductFormRightLabel = styled.label``;
const ProductFormRightInput = styled.input`
  display: none;
`;
const ProductUpdateButton = styled.button`
  border: none;
  padding: 5px;
  border-radius: 5px;
  background-color: darkblue;
  color: white;
  font-weight: 600;
  cursor: pointer;
`;

const Product = () => {
  return (
    <ProductMainContainer>
      <ProductTitleContainer>
        <ProductTitle>Product</ProductTitle>
        <Link to="/newProduct">
          <ProductTitleCreateButton>Create</ProductTitleCreateButton>
        </Link>
      </ProductTitleContainer>

      <ProductTop>
        <ProductTopLeft>
          <Chart data={productData} dataKey="Sales" title="Sales Performance" />
        </ProductTopLeft>
        <ProductTopRight>
          <ProductInfoTop>
            <ProductInfoTopImg
              src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            ></ProductInfoTopImg>
            <ProductInfoTopname>Apple Airpods</ProductInfoTopname>
          </ProductInfoTop>
          <ProductInfoBottom>
            <ProductInfoItem>
              <ProductInfoItemKey>id:</ProductInfoItemKey>
              <ProductInfoItemValue>123</ProductInfoItemValue>
            </ProductInfoItem>

            <ProductInfoItem>
              <ProductInfoItemKey>sales:</ProductInfoItemKey>
              <ProductInfoItemValue>4923</ProductInfoItemValue>
            </ProductInfoItem>

            <ProductInfoItem>
              <ProductInfoItemKey>active:</ProductInfoItemKey>
              <ProductInfoItemValue>yes</ProductInfoItemValue>
            </ProductInfoItem>

            <ProductInfoItem>
              <ProductInfoItemKey>in stock:</ProductInfoItemKey>
              <ProductInfoItemValue>no</ProductInfoItemValue>
            </ProductInfoItem>
          </ProductInfoBottom>
        </ProductTopRight>
      </ProductTop>

      <ProductBottom>
        <ProductForm>
          <ProductFormLeft>
            <ProductFormLeftItem>
              <ProductFormLeftLabel>Product Name</ProductFormLeftLabel>
              <ProductFormInput
                type="text"
                placeholder="Apple AirPod"
              ></ProductFormInput>
            </ProductFormLeftItem>

            <ProductFormLeftItem>
              <ProductFormLeftLabel>In stock</ProductFormLeftLabel>
              <ProductSelect name="instock" id="instock">
                <ProductSelectOption value="yes">Yes</ProductSelectOption>
                <ProductSelectOption value="No">No</ProductSelectOption>
              </ProductSelect>
            </ProductFormLeftItem>

            <ProductFormLeftItem>
              <ProductFormLeftLabel>In stock</ProductFormLeftLabel>
              <ProductSelect name="instock" id="instock">
                <ProductSelectOption value="yes">Yes</ProductSelectOption>
                <ProductSelectOption value="No">No</ProductSelectOption>
              </ProductSelect>
            </ProductFormLeftItem>
          </ProductFormLeft>

          <ProductFormRight>
            <ProductFormRightUpload>
              <ProductFormRightUploadImg
                src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
              ></ProductFormRightUploadImg>
              <ProductFormRightLabel for="file">
                <Publish />
              </ProductFormRightLabel>
              <ProductFormRightInput
                type="file"
                id="file"
              ></ProductFormRightInput>
            </ProductFormRightUpload>
            <ProductUpdateButton>Update</ProductUpdateButton>
          </ProductFormRight>
        </ProductForm>
      </ProductBottom>
    </ProductMainContainer>
  );
};

export default Product;
