import styled from "styled-components";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";

const Featured = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
const FeaturedItem = styled.div`
  flex: 1;
  margin: 0 20px;
  padding: 30px;
  border-radius: 10px;
  cursor: pointer;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;
const FeaturedTitle = styled.span`
  font-size: 20px;
`;
const FeaturedMoneyContainer = styled.div`
  margin: 10px 0;
  display: flex;
  align-items: center;
`;
const FeaturedMoney = styled.span`
  font-size: 30px;
  font-weight: 600;
`;
const FeaturedRate = styled.span`
  font-size: 14px;
  display: flex;
  align-items: center;
  margin-left: 20px;
`;
const FeaturedIcon = styled.span`
  color: ${(props) => (props.negative === "true" ? "red" : "green")};
`;
const FeaturedSub = styled.span`
  font-size: 15px;
  color: gray;
`;

const FeaturedInfo = () => {
  return (
    <Featured>
      <FeaturedItem>
        <FeaturedTitle>Revenue</FeaturedTitle>
        <FeaturedMoneyContainer>
          <FeaturedMoney>Rs. 2791</FeaturedMoney>
          <FeaturedRate>
            -11.3
            <FeaturedIcon negative="true">
              <ArrowDownward />
            </FeaturedIcon>
          </FeaturedRate>
        </FeaturedMoneyContainer>
        <FeaturedSub>Compared to last month</FeaturedSub>
      </FeaturedItem>

      <FeaturedItem>
        <FeaturedTitle>Sales</FeaturedTitle>
        <FeaturedMoneyContainer>
          <FeaturedMoney>Rs. 8791</FeaturedMoney>
          <FeaturedRate>
            -5.2
            <FeaturedIcon negative="true">
              <ArrowDownward />
            </FeaturedIcon>
          </FeaturedRate>
        </FeaturedMoneyContainer>
        <FeaturedSub>Compared to last month</FeaturedSub>
      </FeaturedItem>

      <FeaturedItem>
        <FeaturedTitle>Cost</FeaturedTitle>
        <FeaturedMoneyContainer>
          <FeaturedMoney>Rs. 2822</FeaturedMoney>
          <FeaturedRate>
            +1.3
            <FeaturedIcon>
              <ArrowUpward />
            </FeaturedIcon>
          </FeaturedRate>
        </FeaturedMoneyContainer>
        <FeaturedSub>Compared to last month</FeaturedSub>
      </FeaturedItem>
    </Featured>
  );
};

export default FeaturedInfo;
