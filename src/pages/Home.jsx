import styled from "styled-components";
import Chart from "../components/Chart.jsx";
import FeaturedInfo from "../components/FeaturedInfo";
import WidgetLg from "../components/WidgetLg.jsx";
import WidgetSm from "../components/WidgetSm";
import { userData } from "../dummyData";

const Container = styled.div`
  flex: 4;
`;
const HomeWidgets = styled.div`
  display: flex;
  margin: 20px;
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
      <HomeWidgets>
        <WidgetSm />
        <WidgetLg />
      </HomeWidgets>
    </Container>
  );
};

export default Home;
