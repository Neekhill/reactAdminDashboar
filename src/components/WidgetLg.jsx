import styled from "styled-components";
import nikhil3 from "../assets/nikhil3.jpg";
import ButtonWidgetLg from "./ButtonWidgetLg";

const WidgetLgContainer = styled.div`
  flex: 2;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  padding: 20px;
`;
const WidgetLgTitle = styled.h3`
  font-size: 22px;
  font-weight: 600;
`;

const WidgetLgTable = styled.table`
  width: 100%;
  border-spacing: 20px;
`;
const WidgetLgTr = styled.tr``;
const WidgetLgTh = styled.th`
  text-align: left;
`;
const WidgetLgTdUser = styled.td`
  display: flex;
  align-items: center;
  font-weight: 600;
`;
const WidgetLgTdImg = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;
const WidgetLgTdName = styled.span``;
const WidgetLgTdDate = styled.td`
  font-weight: 300;
`;
const WidgetLgTdAmount = styled.td`
  font-weight: 300;
`;
const WidgetLgTdStatus = styled.td``;

const WidgetLg = () => {
  return (
    <WidgetLgContainer>
      <WidgetLgTitle>Latest Transactions</WidgetLgTitle>
      <WidgetLgTable>
        <WidgetLgTr>
          <WidgetLgTh>Customer</WidgetLgTh>
          <WidgetLgTh>Date</WidgetLgTh>
          <WidgetLgTh>Amount</WidgetLgTh>
          <WidgetLgTh>Status</WidgetLgTh>
        </WidgetLgTr>

        <WidgetLgTr>
          <WidgetLgTdUser>
            <WidgetLgTdImg src={nikhil3} alt="" />
            <WidgetLgTdName>Nikhil Yadav</WidgetLgTdName>
          </WidgetLgTdUser>
          <WidgetLgTdDate>14 nov 2021</WidgetLgTdDate>
          <WidgetLgTdAmount>Rs. 3541</WidgetLgTdAmount>
          <WidgetLgTdStatus>
            <ButtonWidgetLg type="Approved" />
          </WidgetLgTdStatus>
        </WidgetLgTr>

        <WidgetLgTr>
          <WidgetLgTdUser>
            <WidgetLgTdImg src={nikhil3} alt="" />
            <WidgetLgTdName>Nikhil Yadav</WidgetLgTdName>
          </WidgetLgTdUser>
          <WidgetLgTdDate>14 nov 2021</WidgetLgTdDate>
          <WidgetLgTdAmount>Rs. 3541</WidgetLgTdAmount>
          <WidgetLgTdStatus>
            <ButtonWidgetLg type="Declined" />
          </WidgetLgTdStatus>
        </WidgetLgTr>

        <WidgetLgTr>
          <WidgetLgTdUser>
            <WidgetLgTdImg src={nikhil3} alt="" />
            <WidgetLgTdName>Nikhil Yadav</WidgetLgTdName>
          </WidgetLgTdUser>
          <WidgetLgTdDate>14 nov 2021</WidgetLgTdDate>
          <WidgetLgTdAmount>Rs. 3541</WidgetLgTdAmount>
          <WidgetLgTdStatus>
            <ButtonWidgetLg type="Approved" />
          </WidgetLgTdStatus>
        </WidgetLgTr>

        <WidgetLgTr>
          <WidgetLgTdUser>
            <WidgetLgTdImg src={nikhil3} alt="" />
            <WidgetLgTdName>Nikhil Yadav</WidgetLgTdName>
          </WidgetLgTdUser>
          <WidgetLgTdDate>14 nov 2021</WidgetLgTdDate>
          <WidgetLgTdAmount>Rs. 3541</WidgetLgTdAmount>
          <WidgetLgTdStatus>
            <ButtonWidgetLg type="Pending" />
          </WidgetLgTdStatus>
        </WidgetLgTr>
      </WidgetLgTable>
    </WidgetLgContainer>
  );
};

export default WidgetLg;
