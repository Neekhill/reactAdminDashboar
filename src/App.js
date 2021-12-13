import SideBar from "./components/SideBar";
import Topbar from "./components/Topbar";
import styled from "styled-components";
import Home from "./pages/Home";

const Container = styled.div`
  display: flex;
  margin-top: 10px;
`;

function App() {
  return (
    <>
      <Topbar />
      <Container>
        <SideBar />
        <Home />
      </Container>
    </>
  );
}

export default App;
