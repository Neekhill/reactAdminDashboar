import React from "react";
import styled from "styled-components";
import Chart from "../components/Chart";
import FeaturedInfo from "../components/FeaturedInfo";
import { userData } from "../dummyData";

const Container = styled.div`
  flex: 4;
`;
const Home = () => {
  return (
    <Container>
      <FeaturedInfo />
      <Chart
        data={userData}
        dataKey="Active User"
        title="User Analytics"
        grid
      />
    </Container>
  );
};

export default Home;
